import React from 'react';
import '../css/footer.css';
import SocialBar from '../components/SocialBar'
import NewsLetterSubs from '../components/NewsLetterSubs'

function FootbarBoot() {
  return (<div>
    <footer className="footer">
      <NewsLetterSubs />
      <SocialBar />
    </footer>
  </div>
  )
}

export default FootbarBoot;