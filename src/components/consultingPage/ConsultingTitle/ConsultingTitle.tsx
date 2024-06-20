import { headers } from 'next/headers';
import Link from 'next/link';
import ConsultingShareButton from '../ConsultingShareButton/ConsultingShareButton';
import './ConsultingTitle.scss';

interface ConsultingTitleProps {
  title: string;
  description: string;
  url: string;
}

const ConsultingTitle = ({ title, description, url }: ConsultingTitleProps) => {
  const protocol = headers().get('x-forwarded-proto') || 'http';
  const host = headers().get('host');
  const fullUrl = `${protocol}://${host}/${url}`;
  
  return (
    <div className="consulting-title">
      <h1 className="titleH1">{title}</h1>
      <div className="content">
        <p className="description">{description}</p>
        <div className="buttons">
          <ConsultingShareButton siteUrl={fullUrl} />
          <Link
            href={`https://twitter.com/intent/tweet?url=${fullUrl}&text=${title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28px" height="28px">
              <path
                fill="#03a9f4"
                d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
              />
              <path
                fill="#fff"
                d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3	c-0.951,0.559-2.671,1.156-3.793,1.372C29.789,13.808,24,14.755,24,20v2c-4,0-7.9-3.047-10.327-6c-2.254,3.807,1.858,6.689,2.327,7	c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27	c0.626,1.935,3.773,2.958,5.928,3c-2.617,2.029-7.126,2.079-8,1.977c8.989,5.289,22.669,0.513,21.982-12.477	C34.95,18.818,35.342,18.104,36,17.12"
              />
            </svg>
          </Link>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 48 48"
            >
              <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConsultingTitle;
