export const getFile = async (text: string) => {
  const response = await fetch(
    `http://95.217.134.12:4010/create-pdf?apiKey=${process.env.REACT_APP_API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    }
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  return url;
};
