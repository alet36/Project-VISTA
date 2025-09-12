from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import torch
import torch.nn as nn
import torch.nn.functional as F
import torchvision.transforms as transforms
from PIL import Image

app = FastAPI()

# Allow frontend (Netlify) to talk with backend (FastAPI)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # you can restrict later to your Netlify URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define a simple CNN for MNIST-like digits
class SimpleCNN(nn.Module):
    def __init__(self):
        super(SimpleCNN, self).__init__()
        self.conv1 = nn.Conv2d(1, 16, 3, 1)
        self.conv2 = nn.Conv2d(16, 32, 3, 1)
        self.fc1 = nn.Linear(32*5*5, 128)
        self.fc2 = nn.Linear(128, 10)

    def forward(self, x):
        x = F.relu(self.conv1(x))
        x = F.max_pool2d(F.relu(self.conv2(x)), 2)
        x = torch.flatten(x, 1)
        x = F.relu(self.fc1(x))
        x = self.fc2(x)
        return x

# Load model (toy weights for demo)
model = SimpleCNN()
# If you have trained weights, load them here:
# model.load_state_dict(torch.load("model.pth", map_location="cpu"))
model.eval()

# Preprocessing for MNIST-like grayscale input
transform = transforms.Compose([
    transforms.Grayscale(num_output_channels=1),
    transforms.Resize((28, 28)),
    transforms.ToTensor(),
    transforms.Normalize((0.5,), (0.5,))
])

@app.get("/")
def home():
    return {"message": "FastAPI CNN backend is running!"}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    # Load and preprocess image
    image = Image.open(file.file).convert("L")
    img_tensor = transform(image).unsqueeze(0)

    # Run through model
    with torch.no_grad():
        output = model(img_tensor)
        prediction = torch.argmax(output, dim=1).item()

    return {"prediction": prediction}
