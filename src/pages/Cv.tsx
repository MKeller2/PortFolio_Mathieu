function PdfViewer({ pdfUrl }: { pdfUrl: string }) {
    return (
      <div>
        <embed src={pdfUrl} width="100%" height="550px" type="application/pdf" />
      </div>
    );
  }

function Cv() {
    return <PdfViewer pdfUrl="src\assets\Mathieu_Keller_FrontEnd.pdf" />
}

export default Cv;