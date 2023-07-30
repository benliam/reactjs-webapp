// Page needed libraries
import Head from 'next/head'
import Script from 'next/script'

// Import core layout
import Layout from './Compontents/Layout';


function SignUpForm() {
  return (
    <Layout title="Đăng ký sự kiện tháng 8" header="text-white" footer="">
      <main>
      <section className="pt-0">
  <div className="jumbotron jumbotron-fluid vh-50 d-flex align-items-center bg-dark text-white">
    <div
      className="bg o-7"
      style={{ backgroundImage: "url(images/hero-sign-up-form.jpg)" }}
    />
    <div className="container text-center">
      <h5 className="in-left">Sign up form</h5>
      <h1 className="in-top">Tattoos for birthday</h1>
    </div>
  </div>
  <div className="container py-6">
    <div className="row">
      <div className="offset-sm-2 col-sm-8">
        <h3>Hình xăm "free" cho những bạn có sinh nhật vào tháng 8!</h3>
        <p class>
            Tháng 8 là tháng bắt đầu mùa thu và cũng là tháng mình yêu thích, nên mình muốn tặng những hình xăm kỷ niệm cho những bạn có ngày sinh nhật vào tháng này.
            Các bạn điền đầy đủ thông tin đăng ký ở form bên dưới và đọc những lưu ý khi đăng ký nha. Mình sẽ confirm cho những yêu cầu đăng ký hợp lệ và sắp xếp thời gian cho lịch sớm nhất
        </p>
       
       <div className="pb-4">
        <code>
            <ul>
                <li>18+</li>
                <li>Những bạn có sinh nhật từ 1/8 - 31/8 </li>
                <li>Hình xăm có kích thước tối đa 5 x 5 cm</li>
                <li>Hình xăm đen / hoặc những hình xăm có tối đa không quá 3 màu</li>
                <li>Không đè hình, không cover-up</li>
            </ul>
        </code>
        <p>Chúng mình sẽ liên hệ để xác nhận và hẹn lịch qua những thông tin bạn cung cấp ở form dưới</p>
        </div>

        <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></Script>
        <div className="elfsight-app-d3e926b3-762f-4b1a-b299-a2c003e089b7"></div>

        <h3 className="text-center mt-5">Thank you for visiting 🥳</h3>

      </div>
    </div>
  </div>
</section>

    </main>
    </Layout>
  )
}

export default SignUpForm