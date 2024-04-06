from .forms import FileUploadForm
from django.shortcuts import render
from PIL import Image
from home import ocr


# Create your views here.
def home(request):
    if request.method == "POST":
        form = FileUploadForm(request.POST, request.FILES)
        if form.is_valid():
            # Handle the file
            file = form.cleaned_data["Marksheet"]
            img = Image.open(file)
            img_path = "home/uploads/marksheet.jpg"
            img.save(img_path, "JPEG")
            subject_marks = ocr.do_ocr(img_path)
            # Do something with the file, like save it to the database or process it
            return render(
                request, "home/success.html", {"subject_marks": subject_marks}
            )
    else:
        form = FileUploadForm()
    # return render(request, "upload_file.html", {"form": form})
    return render(request, "home/index.html", {"form": form})
