import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from "react-helmet";
import '@babel/polyfill';

import { GlobalStyle } from  './global.styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';


import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import FileUploader from './components/file-upload/file-upload.component';
import MusicPlayer from './components/music-player/music-player.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const MasteringPage = lazy(() => import('./pages/mastering-page/mastering-page.component'));
const RepairPage = lazy(() => import('./pages/mastering-page/repair-page.component'));
const ProductionPage = lazy(() => import('./pages/production-page/production-page.component'));
const MixingPage = lazy(() => import('./pages/mixing-page/mixing-page.component'));
const MasteringSongList = lazy(() => import('./components/song-lists/mastering-song-list.component'));
const SongListDetail = lazy(() => import('./components/song-lists/song-list-detail.component'));
const UseReducerExample = lazy(() => import('./components/post/use-reducer.component'));
const UseEffectExample= lazy(() => import('./components/post/use-effect.component'));
const AboutPage = lazy(() => import('./pages/aboutpage/about.component'));
const ServicesPage = lazy(() => import('./pages/servicespage/services.component'));
const ContactPage = lazy(() => import('./pages/contactpage/contactpage.component'));
const ThankYouPage = lazy(() => import('./pages/thank-you-page/thank-you-page.component'));

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);
    return (
      <div className="application">
      <Helmet>
        <meta charSet='utf-8' />
        <title>Dale St. Studio</title>
        <link rel='canonical' href='https://dalestreetstudio.com' />
        {/* multiple meta elements */}
        <meta name="description" content="Music Mastering, Mixing & Production services located in Colorado Springs, CO. Affordable rates and revisions. Quick turnaround. Contact or subscribe fore booking! " />
      </Helmet>
      <ThemeProvider theme={theme}>
      <div>
          <GlobalStyle />
          <Header />
          <MusicPlayer />
          <Switch>
            <ErrorBoundary>
              <Suspense fallback={<Spinner />}>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route exact path='/checkout' component={CheckoutPage} />
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/services' component={ServicesPage} />
                <Route exact path='/beats-for-sale' component={ProductionPage} />
                <Route exact path='/mixing-info' component={MixingPage} />
                <Route exact path='/mastering-info' component={MasteringPage} />
                <Route exact path='/repair-info' component={RepairPage} />
                <Route exact path='/contact' component={ContactPage} />
                <Route
                  exact
                  path='/sign-in'
                  render={() =>
                    currentUser ? (
                      <Redirect to='/' />
                    ) : (
                      <SignInAndSignUpPage/>
                    )
                  }
                  />
                <Route exact path='/mastering-song-list' component={MasteringSongList} />
                <Route path='/mastering-song-list/:detailId' component={SongListDetail} />
                <Route exact path='/file-upload' component={FileUploader} />
                <Route exact path='/use-reducer-example' component={UseReducerExample} />
                <Route exact path = '/use-effect-example' component={UseEffectExample} />
                <Route exact path = '/thank-you' component={ThankYouPage} />
              </Suspense>
            </ErrorBoundary>
          </Switch>
          <Footer />
        </div>
        </ThemeProvider>
      </div>
    );
  }


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
