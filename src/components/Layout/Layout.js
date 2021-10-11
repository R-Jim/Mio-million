export const getLayoutForResolution = (resolution) => {
    const layoutIndex = Math.floor(Math.random() * resolution.length);
    return resolution[layoutIndex];
}
