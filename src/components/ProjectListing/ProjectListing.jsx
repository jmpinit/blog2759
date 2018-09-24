import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Palette from 'react-palette';
import styles from './ProjectListing.module.scss';

export default class ProjectListing extends React.PureComponent {
  getList() {
    const List = [];
    this.props.projectEdges.forEach(projectEdge => {
      console.log(projectEdge);
      const cover =
        projectEdge.node.frontmatter.cover.childImageSharp !== null
          ? projectEdge.node.frontmatter.cover.childImageSharp.sizes
          : {
              aspectRatio: 1,
              sizes: '(max-width: 850px) 100vw, 850px',
              src: projectEdge.node.frontmatter.cover.publicURL,
              srcSet: projectEdge.node.frontmatter.cover.publicURL,
              tracedSVG: '',
            };

      List.push({
        path: projectEdge.node.fields.slug,
        cover,
        client: projectEdge.node.frontmatter.client,
        service: projectEdge.node.frontmatter.service,
        imageURL: cover.src,
      });
    });
    return List;
  }
  render() {
    const List = this.getList();
    return (
      <div className={styles.base}>
        {List.map(project => (
          <div key={project.path} className={styles.wrapper}>
            <div className={styles.content}>
              <div className={styles.image}>
                <Img sizes={project.cover} />
              </div>
              <Link to={project.path} key={project.path} className={styles.link}>
                <Palette image={project.imageURL}>
                  {palette => <div className={styles.overlay} style={{ backgroundColor: palette.vibrant }} />}
                </Palette>
                <div className={styles.description} key={project.description}>
                  {project.description}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
