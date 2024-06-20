import Link from 'next/link';
import Image from 'next/image';
import './Projects.scss';
import initTranslations from '@/app/i18n';
const Projects = async ({ locale }: any) => {
  const { t } = await initTranslations(locale, ['home']);
  return (
    <section className="container">
      <div className="projects-blocks">
        <div className="project-block div1">
          <Image
            fill={true}
            priority
            sizes="100%"
            className="project-photo"
            src="/main/section6project/projectBlock1.jpg"
            alt="Buy real estate"
          />
          <Link href="/projects-map" className="project-bg">
            <div className="info">
              <div className="title">{t('projects.project1-title')}</div>
              <div className="placement">{t('projects.project1-description')}</div>
            </div>

            <div className="link">
              <Image width={20} height={20} src="/icons/link.svg" alt="link icon" />
            </div>
            <span className="project-logo">
              <Image
                fill={true}
                sizes="100%"
                src="/main/section6project/ProPartLogo.png"
                alt="Property Partners logo"
              />
            </span>
          </Link>
        </div>
        <div className="project-block div2">
          <Image
            fill={true}
            sizes="100%"
            className="project-photo"
            src="/main/section6project/projectBlock2.jpg"
            alt="Construction services"
          />
          <Link href="/construction" className="project-bg">
            <div className="info">
              <div className="title">{t('projects.project2-title')}</div>
              <div className="placement">{t('projects.project2-description')}</div>
            </div>

            <div className="link">
              <Image width={20} height={20} src="/icons/link.svg" alt="link icon" />
            </div>
            <span className="project-logo">
              <Image
                fill={true}
                sizes="100%"
                src="/main/section6project/CarciaLogo.png"
                alt="CarcialLogo"
              />
            </span>
          </Link>
        </div>
        <div className="project-block div3">
          <Image
            fill={true}
            sizes="100%"
            className="project-photo"
            src="/main/section6project/projectBlock3.jpg"
            alt="Legal services"
          />
          <Link href="/services" className="project-bg">
            <div className="info">
              <div className="title">{t('projects.project3-title')}</div>
              <div className="placement">{t('projects.project3-description')}</div>
            </div>

            <div className="link">
              <Image width={20} height={20} src="/icons/link.svg" alt="link icon" />
            </div>
          </Link>
        </div>
        <div className="project-block div4">
          <Image
            fill={true}
            sizes="100%"
            className="project-photo"
            src="/main/section6project/projectBlock4.jpg"
            alt="Concierge service"
          />
          <Link href="/consierge-services" className="project-bg">
            <div className="info">
              <div className="title">{t('projects.project4-title')}</div>
              <div className="placement">{t('projects.project4-description')}</div>
            </div>

            <div className="link">
              <Image width={20} height={20} src="/icons/link.svg" alt="link icon" />
            </div>
          </Link>
        </div>
        <div className="project-block div5">
          <Image
            fill={true}
            sizes="100%"
            className="project-photo"
            src="/main/section6project/projectBlock5.jpg"
            alt="Golden Visa"
          />
          <Link href="/visa" className="project-bg">
            <div className="info">
              <div className="title">{t('projects.project5-title')}</div>
              <div className="placement">{t('projects.project5-description')}</div>
            </div>
            <div className="link">
              <Image width={20} height={20} src="/icons/link.svg" alt="link icon" />
            </div>
          </Link>
        </div>
        <div className="project-block div6">
          <Image
            fill={true}
            sizes="100%"
            className="project-photo"
            src="/main/section6project/projectBlock6.jpg"
            alt="Insurance"
          />
          <Link href="/construction" className="project-bg">
            <div className="info">
              <div className="title">{t('projects.project6-title')}</div>
              <div className="placement">{t('projects.project6-description')}</div>
            </div>

            <div className="link">
              <Image width={20} height={20} src="/icons/link.svg" alt="link icon" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
