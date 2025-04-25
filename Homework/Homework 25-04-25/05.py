def students_grade(score):
    if 90 <= score < 100:
        return 'A'
    elif 80 <= score < 89:
        return 'B'
    elif 70 <= score < 79:
        return 'C'
    elif 60 <= score < 69:
        return 'D'
    else:
        return 'E'

print(students_grade(98))