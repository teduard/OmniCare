import LandingPageLayout from "../layouts/LandingPageLayout";

const CenterText = () => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1>404 - Not Found</h1>
      
    </div>
  );
};

function ErrorPage() {

  return (
    <>
      <LandingPageLayout
        content={
          <>
            <CenterText/>
          </>
        }
        header={false}
      />
    </>
  );
}

export default ErrorPage;
