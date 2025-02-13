export default async function Docs({
  params,
}: {
  params: Promise<{ pageUrl: string[] }>;
}) {
  // console.log(params);
  const { pageUrl } = await params;

  if (pageUrl?.length === 2) {
    return (
      <>
        <h1>
          Page for feature {pageUrl[0]} & concept of {pageUrl[1]}
        </h1>
      </>
    );
  } else if (pageUrl?.length === 1) {
    return (
      <>
        <h1> Page for feature {pageUrl[0]}</h1>
      </>
    );
  }

  return (
    <>
      <h1>Docs Home Page</h1>
    </>
  );
}
