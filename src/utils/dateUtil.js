export const convertDate = (dateStr) => {
    const d = new Date(dateStr);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const date = d.toLocaleDateString('en-US', options);
    const time = d.toLocaleTimeString();

    return [date, time];
};
