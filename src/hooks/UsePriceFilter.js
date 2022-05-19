

export const filterPriceValue = (menuPrice,data) => {
  const result = data.filter((curData) =>{
    return curData.price <= menuPrice;
  });
  return result;
}