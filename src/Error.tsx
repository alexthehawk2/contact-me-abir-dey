export default function ErrorPage() {
  return (
    <div
      id="error-page"
      className="d-flex justify-content-center align-items-center flex-column w-100"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            "404 Page Not Found"
          }
        </i>
      </p>
    </div>
  );
}
