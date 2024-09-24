import { useRouteError } from "react-router-dom";
import stylesErrorPage from './ErrorPage.module.scss'


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={stylesErrorPage.errorDiv}>
      <div>
        <h1>Oops!</h1>
        <p>Cette page n'est pas inclue dans le challenge.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}