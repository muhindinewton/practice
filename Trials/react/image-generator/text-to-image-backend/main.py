# main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from huggingface_hub import HfApi
from PIL import Image
import io
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
    model: Optional[str] = "CompVis/stable-diffusion-v1-4"
    height: Optional[int] = 512
    width: Optional[int] = 512

@app.post("/api/generate")
async def generate_image(request: ImageRequest):
    try:
        # Initialize Hugging Face API with token
        hf_token = os.getenv('REACT_APP_HF_API_KEY')
        if not hf_token:
            raise HTTPException(status_code=500, detail="Hugging Face API token not configured")
            
        hf_api = HfApi(token=hf_token)
        
        # Generate image
        image = hf_api.diffusion_image_generation(
            model=request.model,
            prompt=request.prompt,
            height=request.height,
            width=request.width
        )
        
        # Return image URL
        return {"image_url": image.image_url}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))