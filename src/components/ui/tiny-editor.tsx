import { useEffect, useRef } from 'react'
import { Editor as TinyMCEEditor } from '@tinymce/tinymce-react'

interface EditorProps {
  initialValue?: string
  onChange?: (content: string) => void
}

export function Editor({ initialValue, onChange }: EditorProps) {
  const editorRef = useRef<any>(null)

  useEffect(() => {
    if (editorRef.current && initialValue) {
      editorRef.current.setContent(initialValue)
    }
  }, [initialValue])

  const handleEditorChange = (content: string) => {
    if (onChange) {
      onChange(content)
    }
  }

  return (
    <TinyMCEEditor
      apiKey="an3f89uumpw4ql1e9jjgevq4gqzslnmtmyv3q6h4djnrdbcq"
      ref={editorRef}
      onInit={(_, editor) => (editorRef.current = editor)}
      initialValue={initialValue}
      init={{
        height: 500,
        menubar: true,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help | image',
        content_style:
          'body { font-family: Arial, Helvetica, sans-serif; font-size: 14px }',
      }}
      onEditorChange={handleEditorChange}
    />
  )
}
