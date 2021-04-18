import { Editor } from '@tinymce/tinymce-react';
import './styles/tailwind_output.css';
import { useState } from 'react';

export default function App() {
  const [data, setData] = useState('');
  // https://www.tiny.cloud/docs/configure/editor-appearance/#font_formats
  function createMarkup() {
    console.log(data);
    return { __html: data };
  }
  return (
    <div className="">
      <h1 className="mb-5">TinyMCE - REACT</h1>
      <Editor
        apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
        // initialValue="<p>This is the initial content of the editor</p>"
        init={{
          skin: 'snow',
          icons: 'thin',
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
          setData(e.target.getContent());
        }}
        outputFormat="html"
      />
      <article className="mt-24 prose">
        <div dangerouslySetInnerHTML={createMarkup()} />;
      </article>
    </div>
  );
}
