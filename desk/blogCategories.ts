import S from '@sanity/desk-tool/structure-builder'
import { MdOutlineCategory } from "react-icons/md";


// prettier-ignore
export const blogCategories =  S.listItem()
        .title('Blog Categories')
        .schemaType('blogCategory')
          .icon(MdOutlineCategory)
        .child(
          S.documentTypeList('blogCategory').title('Blog Categories')
        )

  