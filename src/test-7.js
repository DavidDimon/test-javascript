const getVendorMostValuable = vendors => {
  let mostValuable = null;
  if (vendors && vendors.length > 0) {
    vendors.forEach(item => {
      if (!mostValuable || mostValuable.salesPerWeek < item.salesPerWeek) {
        mostValuable = item;
      }
    });
  }
  return mostValuable;
};

const calculateSales = sales => {
  if (sales && sales.length > 0) {
    let totalValue = 0;
    const salesByVendor = [];
    for (let i = 0; i < sales.length; i += 1) {
      const salesPerWeek = sales[i]
        .map(item => item)
        .reduce((a, b) => a + b, 0);
      salesByVendor.push({ index: i, salesPerWeek });
      totalValue += salesPerWeek;
    }
    return {
      companyBillingDay: totalValue / 5,
      companyBillingWeek: totalValue,
      salesByVendor,
      vendorMostValuable: getVendorMostValuable(salesByVendor)
    };
  }
  return "Invalid param";
};

export default calculateSales;
