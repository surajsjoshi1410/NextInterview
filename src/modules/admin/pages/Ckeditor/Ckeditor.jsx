import React ,{ useState }from 'react'
import CKEditorDemo from '../../components/CKEditorDemo/CKEditorDemo'


export default function Ckeditor() {
  const [editorContent, setEditorContent] = useState('');

  console.log(editorContent);
  return (
    <>
      <CKEditorDemo editorContent={editorContent} setEditorContent={setEditorContent}/>

    </>



  )
}
