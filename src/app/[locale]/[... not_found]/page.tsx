import { redirect } from 'next/navigation';
const NotFoundPage = () => {
  redirect('/');
};
export default NotFoundPage;
//  return(<div>not found</div>)
