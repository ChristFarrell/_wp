def summary(data):
    for student in data:
        name = student.get("name")

        scores = student.get("scores", [])
        total = sum(scores)
        average = total/ len(scores)
        print(f"{name}: Total = {total}, Average = {average:.2f}")

students = [
    {'name': 'Alice', 'scores': [88, 98, 75]},
    {'name': 'Bob', 'scores': [100, 75, 93]},
    {'name': 'Evi', 'scores': [95, 98, 77]}
]

summary(students)