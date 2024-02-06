import cloudinary
# Import the cloudinary.api for managing assets
import cloudinary.api
# Import the cloudinary.uploader for uploading assets
import cloudinary.uploader

import string

cloudinary.config(
    cloud_name="devwy53sh",
    api_key="API-KEY", #enter your api key
    api_secret="API-SECRET", #enter your api secret
    secure=True,
)

def uploadImage(name):
  name1 = name.replace(".","")
  cloudinary.uploader.upload(name, public_id=name1, unique_filename=True, overwrite=True)
  return cloudinary.CloudinaryImage(name1).build_url()
