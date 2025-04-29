# main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import requests
import os
from pydantic import BaseModel
from typing import Optional
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ImageRequest(BaseModel):
    prompt: str
    orientation: Optional[str] = "landscape"  # landscape, portrait, or squarish

from fastapi.responses import JSONResponse
from fastapi.middleware.gzip import GZipMiddleware

# Add Gzip compression
app.add_middleware(GZipMiddleware, minimum_size=1000)

@app.post("/api/generate")
async def generate_image(request: ImageRequest):
    try:
        # Get Unsplash API key
        unsplash_key = os.getenv('UNSPLASH_API_KEY')
        if not unsplash_key:
            raise HTTPException(status_code=500, detail="Unsplash API key not configured")
        
        # Search Unsplash for images with optimized parameters
        headers = {
            'Authorization': f'Client-ID {unsplash_key}'
        }
        params = {
            'query': request.prompt,
            'orientation': request.orientation,
            'per_page': 1,
            'content_filter': 'high'  # Get high-quality images
        }
        
        response = requests.get(
            'https://api.unsplash.com/search/photos',
            headers=headers,
            params=params
        )
        
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail="Failed to fetch image from Unsplash")
            
        data = response.json()
        if not data['results']:
            raise HTTPException(status_code=404, detail="No images found for the given prompt")
            
        # Get smaller image URL for faster loading
        image = data['results'][0]
        image_url = image['urls']['small']  # Use smaller image size
        
        # Return optimized response with cache headers
        return JSONResponse(
            content={
                "image_url": image_url,
                "thumb_url": image['urls']['thumb'],  # Thumbnail for preloading
                "photographer": image['user']['name'],
                "photo_link": image['links']['html']
            },
            headers={
                "Cache-Control": "public, max-age=3600",
                "ETag": image['id']
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))