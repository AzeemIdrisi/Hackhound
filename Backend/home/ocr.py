import pytesseract
from PIL import Image
import re


def do_ocr(image_path):
    with Image.open(image_path) as img:
        # Use pytesseract to extract text from the image
        extracted_text = str(pytesseract.image_to_string(image_path))
        pattern = r"english comm\. (\d+)"
        match = re.search(pattern, extracted_text)

        if match:
            first_marks = match.group(1)
            print(f"First marks after English comm.: {first_marks}")
        else:
            print("Pattern not found in the input string.")
        pattern = r"(\d{3}) (\D+?) (\d{3})"

        matches = re.findall(pattern, extracted_text)

        subject_marks = {}
        for match in matches:
            subject_code = match[0]
            subject_name = match[1]
            marks = match[2]
            subject_marks[subject_name] = marks

        output = ""
        for subject, marks in subject_marks.items():
            print(f"{subject}: {marks}")
            # output += f"{subject}: {marks}" + "\n"
        return subject_marks
        # print(str(extracted_text).lower())
