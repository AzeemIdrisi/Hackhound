from .forms import FileUploadForm
from django.shortcuts import render
from PIL import Image
from home import ocr
from django.http import JsonResponse


# Create your views here.
def home(request):
    img_path = "home/uploads/marksheet.jpg"
    subject_marks = ocr.do_ocr(img_path)
    # Do something with the file, like save it to the database or process it
    return JsonResponse({"subject_marks": subject_marks})
