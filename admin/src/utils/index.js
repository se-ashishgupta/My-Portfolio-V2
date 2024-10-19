export const getItemFromStore = (key, store = localStorage) =>
  JSON.parse(store.getItem(key));

export const setItemToStore = (key, payload, store = localStorage) =>
  store.setItem(key, JSON.stringify(payload));

export const removeItemFromStore = (key, store = localStorage) =>
  store.removeItem(key);

export const incrementCalculation = (currData, prevData) => {
  const current = Number(currData);
  const previous = Number(prevData);

  if (isNaN(current) || isNaN(previous)) {
    return 0;
  }

  if (previous === 0) {
    if (current === 0) {
      return 0;
    }
    // Considered an infinite increase, but representing as 9999.99% for practicality
    return current * 100;
  }

  let difference = current - previous;
  let percentage = (difference / previous) * 100;
  return percentage ? percentage.toFixed(2) : "";
};

export const exportToCSV = (csv, filename) => {
  const csvFile = new Blob([csv], { type: "text/csv" });
  const downloadLink = document.createElement("a");
  downloadLink.download = filename;
  downloadLink.href = window.URL.createObjectURL(csvFile);
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  downloadLink.click();
};

export const filterDeliverablesDetails = (inputData) => {
  // Define a helper function to map complexity details
  function mapComplexityDetails(complexityDetails, subDeliverable) {
    return complexityDetails.map((detail) => ({
      subDeliverable: subDeliverable,
      complexity: detail.complexity,
      number: parseInt(detail.totalNumber),
      hours: detail.totalHours,
      cost: detail.totalRate,
    }));
  }

  // Transform DeliverableDetails into the desired format
  const transformedData = inputData?.reduce((result, item, index, arr) => {
    const existingCategory = result.find(
      (entry) => entry.category === item.category
    );
    if (existingCategory) {
      const existingDeliverable = existingCategory.deliverables.find(
        (deliverable) => deliverable.deliverable === item.deliverable
      );
      if (existingDeliverable) {
        existingDeliverable.subDeliverables.push(
          ...mapComplexityDetails(item.complexityDetails, item.subDeliverable)
        );
      } else {
        existingCategory.deliverables.push({
          deliverable: item.deliverable,
          subDeliverables: mapComplexityDetails(
            item.complexityDetails,
            item.subDeliverable
          ),
        });
      }
    } else {
      result.push({
        category: item.category,
        deliverables: [
          {
            deliverable: item.deliverable,
            subDeliverables: mapComplexityDetails(
              item.complexityDetails,
              item.subDeliverable
            ),
          },
        ],
      });
    }
    return result;
  }, []);

  return transformedData;
};
