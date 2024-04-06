from django import forms


class FileUploadForm(forms.Form):
    Marksheet = forms.FileField()
