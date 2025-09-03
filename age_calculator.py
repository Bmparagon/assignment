# age_calculator
# A simple program to calculate age based on birthdate input.

import datetime

def calculate_age(birthdate):
    birthdate = datetime.datetime.strptime(birthdate, "%Y-%m-%d").date()
    today = datetime.date.today()

    age = today.year - birthdate.year

    if (today.month, today.day) < (birthdate.month, birthdate.day):
        age -= 1
    return age

bd_input = input("Enter your birthdate (YYYY-MM-DD): ")
if bd_input == "":
    print("No birthdate provided.")
elif bd_input.isalpha():
    print("Invalid input. Please enter a valid date in YYYY-MM-DD format.")
else:
    age = calculate_age(bd_input)
    print(f"Your age is {age} years.")