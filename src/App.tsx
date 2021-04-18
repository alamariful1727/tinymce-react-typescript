import { Editor } from '@tinymce/tinymce-react';
import './styles/tailwind_output.css';

export default function App() {
  // https://www.tiny.cloud/docs/configure/editor-appearance/#font_formats
  return (
    <div className="">
      <h1 className="mb-5">TinyMCE - REACT</h1>
      <Editor
        apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
        // initialValue="<p>This is the initial content of the editor</p>"
        init={{
          // skin: 'snow',
          // icons: 'thin',
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
      <article className="mt-24 prose">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with
          the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for
          Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up
          around the country.
        </p>
        <ol>
          <li>hello</li>
          <li>wolre</li>
          <li>fhsalef</li>
          <li>dskfa</li>
          <li>vfasef</li>
        </ol>
      </article>
    </div>
  );
}
