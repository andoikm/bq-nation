export const formatNotionDataToRender = (data) => {
  for (const key in data.recordMap.block) {
    const value = data.recordMap.block[key].value?.value;

    if (value) {
      data.recordMap.block[key].value = {
        ...data.recordMap.block[key].value,
        ...value,
        value: null,
      };
    }
  }

  return data;
};
