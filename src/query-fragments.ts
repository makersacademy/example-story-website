import { graphql } from "gatsby"

export const ChapterQuery = graphql`
  fragment ChapterFrontmatter on MarkdownRemark {
    frontmatter {
      title
      leftPage {
        title
        subTitle
        content
        backgroundImage {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      rightPage {
        title
        subTitle
        content
        backgroundImage {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export const IndexQuery = graphql`
  fragment IndexFrontmatter on MarkdownRemark {
    frontmatter {
      jobTitle
      greeting
      careerAim
      date(formatString: "DD MMMM YYYY")
      image {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export const navBarQuery = graphql`
  fragment NavBarFrontmatter on MarkdownRemark {
    frontmatter {
      title
      jobTitle
      greeting
    }
  }
`
