def day_num(x):
    daily = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return daily.index(x)

print(day_num("Friday"))
print(day_num("Saturday"))