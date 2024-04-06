import pandas as pd
import numpy as np

pd.options.display.max_rows = None
cbse_data = pd.read_csv("Dataset - CBSE.csv")
assam_data = pd.read_csv("Dataset - Assam.csv")
dF = pd.DataFrame(cbse_data)


cbse_dF = pd.DataFrame(cbse_data)
cbse_dF["PercentileStateTotal"] = np.round((dF["Total"].rank(pct=True)) * 100, 2)
cbse_dF["PercentileStateTheory"] = np.round((dF["Theory"].rank(pct=True)) * 100, 2)
print("\n\n\nCBSE", cbse_dF)
assam_dF = pd.DataFrame(assam_data)
assam_dF["PercentileStateTotal"] = np.round((assam_dF["Total"].rank(pct=True)) * 100, 2)
assam_dF["PercentileStateTheory"] = np.round(
    (assam_dF["Theory"].rank(pct=True)) * 100, 2
)

print("\n\n\nASSAM", assam_dF)


h = pd.concat([cbse_dF["Total"], assam_dF["Total"]], axis=0)
h_df = pd.DataFrame(h)
h_df["Percentile Total"] = np.round((h.rank(pct=True)) * 100, 2)
print(h_df)


# import matplotlib.pyplot as plt


# df = h_df

# # Categorize the percentile values
# bins = [0, 75, 90, 95, 100]
# labels = ["<75", "75-90", "90-95", "95>"]
# df["Percentile Range"] = pd.cut(
#     df["Percentile Total"], bins=bins, labels=labels, right=False
# )

# # Group by percentile range and calculate total
# grouped_df = df.groupby("Percentile Range")["Total"].sum().reset_index()

# # Plotting
# plt.figure(figsize=(8, 6))
# plt.bar(grouped_df["Percentile Range"], grouped_df["Total"], color="skyblue")
# plt.xlabel("Percentile Range")
# plt.ylabel("Total")
# plt.title("Total based on Percentile Range")
# plt.savefig("percentile_chart.png")
# plt.close()
