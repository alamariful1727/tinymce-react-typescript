import { Editor } from '@tinymce/tinymce-react';

export default function App() {
  // https://www.tiny.cloud/docs/configure/editor-appearance/#font_formats
  return (
    <div>
      <h1 className="mb-5">TinyMCE - REACT</h1>
      <Editor
        apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
        // initialValue="<p>This is the initial content of the editor</p>"
        init={{
          // skin: "snow",
          // icons: "thin",
          placeholder: 'Enter you text here...',
          height: 400,
          menubar: true,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount textcolor',
          ],
          toolbar:
            'undo redo | styleselect | fontselect | fontsizeselect | forecolor backcolor | code | bold italic | alignleft aligncenter alignright alignjustify | outdent indent ',
          fontsize_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
        }}
        onEditorChange={(content, editor) => {
          console.log('Content was updated:', content);
        }}
        onChange={(e: {
          target: any;
          type: string;
          preventDefault: () => void;
          isDefaultPrevented: () => boolean;
          stopPropagation: () => void;
          isPropagationStopped: () => boolean;
          stopImmediatePropagation: () => void;
          isImmediatePropagationStopped: () => boolean;
        }) => {
          console.log('Content was updated (handleOnChange):', e.target.getContent());
        }}
        outputFormat="html"
      />
    </div>
  );
}
