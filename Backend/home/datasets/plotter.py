import pandas as pd
import matplotlib.pyplot as plt

# Sample data
data = {
    "State": ["State A", "State B", "State C"],
    "95>": [80, 85, 90],
    "75-95": [70, 75, 80],
}
df = pd.DataFrame(data)

# Plotting
fig, ax = plt.subplots(figsize=(10, 6))
barWidth = 0.3

# Position of bars on x-axis
r = range(len(df))

# Make the plot
plt.bar(r, df["95>"], color="tab:blue", width=barWidth, edgecolor="white", label="95>")
plt.bar(
    r,
    df["75-95"],
    bottom=df["95>"],
    color="tab:orange",
    width=barWidth,
    edgecolor="white",
    label="75-95",
)

# Add xticks on the middle of the group bars
plt.xlabel("States", fontweight="bold")
plt.xticks(r, df["State"])
plt.ylabel("Percentile")
plt.title("Percentile Distribution by State")
plt.legend()

# Save the graph as an image
plt.savefig("percentile_chart.png")

# Close the plot to free up memory
plt.close()
