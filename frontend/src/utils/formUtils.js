const getDirtyFields = (data, dirtyFields) => {
  const dirtyData = Object.keys(dirtyFields).reduce((dirtyData, field) => ({ ...dirtyData, [field]: data[field] }), {});
  return dirtyData;
};

export { getDirtyFields };
