import cloudinary
# Import the cloudinary.api for managing assets
import cloudinary.api
# Import the cloudinary.uploader for uploading assets
import cloudinary.uploader

cloudinary.config(
    cloud_name="devwy53sh",
    api_key="244389599412372",
    api_secret="da--HG37wTXmNog65BnEWtPa3Vc",
    secure=True,
)

def uploadImage(name):
  cloudinary.uploader.upload(name, public_id="image_of_the_moment", unique_filename = False, overwrite=True)
  return cloudinary.CloudinaryImage("image_of_the_moment").build_url()