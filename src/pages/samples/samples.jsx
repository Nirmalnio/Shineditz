import React from "react";
import "./samples.css"
import Header from "../../Components/Head/Header";
import Footer from "../../Components/Footer/Footer";
import { facebookicon,youtubeicon,instaIcon,linkedin } from '../../Assets/icon'
import gif from "../../Assets/Images/contact-us.gif"
function Samples(){
   return(
    <div className="samplemainDiv">
        <Header/>
            <div className="samplediv">
                    <h2>Samples</h2>
                    <span>Check out our realistic sample images</span>

                    <div className="sampleGirdLayout">
                        <img src="https://uc8f99d18ddf9f69219c8b3eeaee.previews.dropboxusercontent.com/p/thumb/AB1jqEArd7cacExCzYfT5eCC0ivA-CyexkIqu93ZiEPDIysy0xaNjzJYgVYXHIYNeutmOqCVq5jY1yWvRXEwk4mpHve2pYRvDX53G-CzOo2sgaPD0dka5E2swa2xZq32oaaBpNnNhnELZ9Hi6PBQ6MBa9rxOmIJiUZkRH1rc3h7MPdXe8YOEUMc93TlKAbfqm58FwkkMrmg6sC9YS9speMTNFQT3PqOrI0ZAoOgBTd9vzLCeiPW69Zcv77wRhFMiwjdr8ckmAu8_3zZ-lDGDXGsA2KOjbuMCLijxyIsJMJyrsKn-apkZBt8_Sc8x1rBzlL-C7iALLZtNKR5rX11tbE7DI8Sj26izZgQgqQcOSm7hI-wr8oGWEqzG4uOo29tu9E4/p.jpeg" alt="" />
                        <img src="https://ucb308a6ef6b347a76378f4e643c.previews.dropboxusercontent.com/p/thumb/AB1ibenwlHs1p2npw-1SJ5UqcDzEG1kOrP1iqUc6OD081dZWPdPj-jH3PYZZkjQIp6hPIXN7UD_5HSbLCDOWgUjed26GUXf4aDtGzxO4PAN9wUA9MD7BemEGa35IMMhPsAOJ-GzU64HAb1q8kp6M-ypfIeEJxWGydYJvhSeqPm_2cafkLC4ys6_vvtTShqAqQ4y5bzM9j7ajl1XGFfafiQAjsMXTaUDjN1ZNBIsftCI5h3hO5x1E0nEIGke_i1fvS6UvtkitBWb53nRWFcLPmoat75wlhwbt1vrdRcScdD9vvOpkZ7byGiSfoC4HQ6h5KnA92uYT9DKZ0ho_boY1rNPW7WiQjOnGrZLgywhs3DT-GwYpGkMmCD0B8uvVgHSWPM0/p.jpeg" alt="" />
                        <img src="https://uc78ea31d5fd0aa8648d9fa008a1.previews.dropboxusercontent.com/p/thumb/AB2dzN3tiLClWf4gD3DErh2bpUdWO8ucy4g0VyVG-MLoxuwOEXAgYfPH4Mi-1B8zniStsa1XAZbEcIw5ZJas9dbX29jPjCc-wqKP2fU4YvVmVOZctWRLKD4KiXQtGFa_d-XEZMBmgNtg0Juio-QUMUy9jG7eJdoNDKLRn8wgJwC_-bwmQBhA1fta8jZ4t61hTto-8CG4awQQIeU9rnub1lT1Ct_LfwYk3AFrUgyG-Q6TJNpLqqHV5PoM15l8OkUn4CdMBkRgbbBf6bHaJRR53sfR-g-DlYF_1nnCy-XkY3rUOdVhygmZJ7rQ2jeN8jhR3VsHDZK50siE1csUm6hM5qvmnV4wsb3yvqdfW8ol3yiqeldIQYyVdbLn-sBIooyK4PqjIdo_5lVG9dvwBbtwEbMHnTIvg5DtIvHUtxbuPxFGMD3eCv5xFEY8TAKjs9NRle0/p.jpeg" alt="" />
                        <img src="https://uc60f088204a968be64604e423dc.previews.dropboxusercontent.com/p/thumb/AB1C6RHLDZWp8sqyBChuy-HHTiRjUUHJOUFUNppJuybeWM7RDd-YvzTE7L-EtJEi4WXy-dQicWkjpdHDWzQcA-5btYJ9JNSOfH7e3Ipdly8FUarVBRrHaTBATa-oBXFTeyzb7Ivwtkij7kVhlcR74JMuEIOlzgOQonRJF4HzEsE7orSszAtVgceguEBov3GXQtMOZ_lEEBFKoo_0JvAqD4R3phfJ6nEwpXqMEXCP1I_sydR1Tu-ynZ02q69Kp0_L48pUT714VU6VEOiGtKluZEGeXMOW5n1L1T2pcNOqumP8YrS-QQfujvBCR8LW27Ls9sljLSaMHHZh1Pv0Z5KpdDQ5s5MbXl4IroBuQ4aDAFStPhFnHB0j5YAktAwjUWWK7O396kemYe1P0oc8vEHAaSOEFl7gwI-X2v51xIcU0E4UrGleRlbUAMfjFTFioDmjnGQ/p.jpeg" alt="" />
                        <img src="https://uc8f2e2b646a670d8ea07fad7125.previews.dropboxusercontent.com/p/thumb/AB39irskNoy3nJFVAoV-qn78Wb2sMvYJAJzKKsnTMJf4An1kY28sauDDqOstpnFpyBfnTbJUFlBTcpYcLzi7LnPRRsEMqKFxgsVqWk_JDSQ6DCDWc-SlpwQpldyfljQl3Q8I5F3neCFq1LETP8to_fYRFrwO1Ix5bS7sdBwCrbdNTqA_lGLK3yXioLMInOSWBg4wOHOL1EkVGHGC3zwpe8L3jD_7bz3FpIdWz3nizDe2nKsPEpPqHC3ByK1BJLwWWSFI55Zzqp38xJ-JHple8J7HEuKtGdCcv2e_BYETFqMA6rBOca4cArSd6kFADnKcU2lw9Gfs4NnUOaecVDslmAs_SBChySK6eBA7jC_S9RoxGvtBm4J2rBoBebBpB68jEoo/p.jpeg" alt="" />
                        <img src="https://uc35c2c78b086490780a8ed9fb77.previews.dropboxusercontent.com/p/thumb/AB2l_-66WFy8KGsP1N3XOel2OaadaE2WYADZKxu5gq3uOX_FiRqvQyb_FazrfILSESa6iD76r917tEbvCWf4XU5japmykv1YAjy-HuhSYVZcwZZ-z5WWyv2zIxl6RDtOs5WMdWZzeYyfdf7CU3sNHfHzeXnpYfjfJXnIl2heRbKrNadK0fJHqmsfF4H9zRbvHMz-LdxMrlbhK_g54K9Vm8dEcbP97-qOnduWPwiqXqBp0rMqp2zukfU-DqWLTbNJM_nbjYn6DUnIJnP4MCVg1osxon9IfzhEWI93wh_50KKzMqnt8Ltwex7DDlhIfF8gJ0TTnjz60JCLkQwnq1Gx2MMJmdtwAAoB33WYPborTmGdpVxwY0ciEbiuHKIVTvcqDRM/p.jpeg" alt="" />
                        <img src="https://uc99c3dd2bc78f216c89bc702914.previews.dropboxusercontent.com/p/thumb/AB3vaHhYfYbvPrnCOKmgGF8b3LRwx6BZ9u8rU4kLFrYqiYyfw2kOkqn5BgKa6ETiavSN_YHP0qNIF2nlVleqrmpX87agkMl-FKvZ6UxvNfrCOrwoKPoX8IPT0h74qUlf0sDtiCVJ2ON8BZe49MKbW0QsRNZGtlVICVd7cskzuiXTFu41rTlcoIFpzgLvisaqPrJCuPqlvrlk1qpB_yQruvQHFnvwNnXRnIdDqNL6_2pNX0HEDfYhiqrgYZka3s3tRPNva5zgBIr5oahx2C_d74XX9VeO04vyYXHuiN3Tyf0oGpXVwFx6_sduRPg5PyWmeHbuppeJXCN7NrrnwnqKRqji_V2Tya8-MyR00v5WdMdDUgbcyX_1PpqqaGCbLd2qFO9YICjpm37uWFyVVATQJDgJhS9TmxHs2DPWL3BCP25HmUH13cJNpekswJAqYOq5hdk/p.jpeg" alt="" />
                        <img src="https://uc2014fd32804a0d4154d05f3d33.previews.dropboxusercontent.com/p/thumb/AB1uWzMRk0yrTNxatvyh-zp2O8OSqY4n22Gw1Oh3l4ju_f5ckYsZc2SzFqHz7WzPvZQX_tAyDxqsMgCrrKSA28xj_seyj2Nt6aJ0zz-kcuG2rFboNXZWuzbtgWC9q0Ji64ypgHpRwycoc54Em6-CzmEzWRXSHCc_TDiYRGyqV5PeEbGyuhG-mEkQnFdAsj7KvwbOJXFGHW5DodmNNIvoH-2MoAoOgRwhCpTTsA0OEP_nUOZDYS4ukluRMQBiqaq-jwKYaqLMPDihsrr77TkhdvRTbIh1jEsnRCUmiHC0hWIu0nF9akhTzxX-MLuJFkLf7AZILHLcmg8eReXBRkIPjPmMr_V_hlGjlKUMbXI-GiAPOmVjEGdPgS5AEl9Ju3xpUEE/p.jpeg" alt="" />
                        <img src="https://uc293417d18bc77969436e060c90.previews.dropboxusercontent.com/p/thumb/AB1wYRXS8Jxeos7GqwNxJOaHklThf4wVeDECkr9cKTJt_1V92m7l8pF0wuI41rN6jWUVDRFizUxV-q7XqgtZzpg351YnoLWa8NJeVoHWyaWmmDp1Km4ubwURAsZBiMp2glMoKMH5lFNBZFl5CK1b2vzAv5gcUPRckvejIv02SG1hNbv6qxd7ZkogUuag_D-uGOt_g5uQNrBgRmzkD8wLaQPYShe3Aa-I09HOokenzIynqr50fv7X9P727dQN0Pgnsgizdrq0psRVcg0VE-vJ3ZURbUV8Is1st-pykYrGudxVlH_ApQk9YKF9oBANvrLZ0fbWQC9qJXgBTTydW4iwzSqHZodlX0fPBqGFG0xRzs5QscMWLY9wKkuxDbGXRx4ws3s/p.jpeg" alt="" />
                        <img src="https://uc35192a24b38ea70f29f17df02d.previews.dropboxusercontent.com/p/thumb/AB0jFhcGhogLPJylM_KXyj9r71nkNotvEus3ffF1ZkrSA7m4W-qeu3mEyXUg9WMVrlLREaISxAgHxH_EedjkdP4kSVultFArv72tYTlwyhm9h3xoNrnYF9tQPhcWR0jjVIKRkTu0a6NzCSrHkpTX_AB7mHuOtayf1yZhub_25-2XpXk3M4z6YhslRvxAmDFQqL4SHhRee7-ivTeIpAHSJbEyQl2giZUrTfuQCnuyP66rm2DCVulOU9zxnxzxEtaa3M0NrnuB3Jduk_bnEaVzqXfgCUSv0fspuQTtTiFN3CES5Em1lZe3GegoslxNGGOtJCK6Hh9fCazWsm1IZvX_Of_mkKXKfmVvbiZIZjP3VVB4DVn4oUXkG31X7VEWGcOmEeF0Rx622cQnhYcV3Dj0WfeRdlj9aYk6cuP48WL3KmK3a3MxnNP1Jannv0NtUWVBsksA7vhki272TeiOAZY9TA5Cvij2MN74KaRYuxn9n4fJDoN9owJ3iGh0mx2Q_LG1ZgsHDMGflQ0EQ4XnesACEjsH1nngUpsp9TO5AibsjUXjdrJkWS7EcmBV0Wwd1EARbXQ/p.jpeg" alt="" />
                        <img src="https://uc1fe39c53aa464e2ace54702348.previews.dropboxusercontent.com/p/thumb/AB0FX3A3-NXIGhqLS_Sa9SHrOrl_mLpLRRMX9NPFmFM7rDauLd5tiMQMP1Ljg8ZfSUP8trNtHtO7y5l4xjZq9g_Rt3myAngn9pw3pJ21MVAYUD9vdd0RzNPW41FjGr1yiRDgTd6RS7AE9BgvHRwzFDu3ar8SxuCdXGkaSr0su1tzpNvhI34Hxs6bA0IljLo3tlfAA6GUvU2pF0OZ-8b0PCjn19-6u9RSNL7ZWNV_LPGVh5IIPhtAfdIefQXZzex6UQAUe2OKV2xufAfuvt5I_NpwOM8AFOaBfdg1NG0acTmaXrKUHPZ9krCR9PZTqW9K6vo6JMDKFr4IJODy0iMH3k6QYURcvIFnwKl7Zq68irlqAaawIXRHjf2rctsr-GxICbvR5qyyd5M4NuUukLo2h9fziXOQCfTRDUKhsGE_NsYbsZKQMF5zyNDfojGcnkpWBlxAgyUlDpun2s4Jtrfq5kddOP2r7g3t1degXdtxqEXOVoS5treuZw0m-tvbCrKUwsktVQZ_XeM3He8jvTp6PsbucjdRgwBiVV-sQyxXgLlwfnSiIy2ngYNu6a_YinJBy-nEMBW5HqAW2ki-eD5Aiy3PMpI0jUI4Gie-MySdh2fXCpwZNUfBLfeihbQXPvyqmImYyfjcdBRu559WhfAjtZRXlLbQcwv6UZGIN_4OE5kATx1y-T-7SanQAbcvQMrKUujNHfnikCchqnp_UzGLGqsGUqRx5mueLjZ9_za2gN_xmA/p.jpeg" alt="" />
                        <img src="https://ucc74f3e015f44143aa42c545561.previews.dropboxusercontent.com/p/thumb/AB3B7fpzzsWcQNpQXnqhpiDf1xEfL2KxjE-x-JmSz-L549zs-dL-A2WSq1kd2kEHL-NpFX-Co0UO5m3VEQ8-SOMgyIl_dlRC-1CEBx4W6B-uxJfI7XiGLTghRBKVjkNdTNy5NCXr8YWQEezdZdaXmqoZmNSke0M0Kf7jvX4DxtSlKD_TCoHCMPkbT0UWPpnfufui6Tx2Iv-VdoxQve3BXr97tgVSJ3-2tdXwbPnNGf0IbX5HJZGzBzwJoKue5gcO4VtWdzhgpNehIAjJlByteZOWRhgLS39kyYfxGcboeyE8ryv_lEclUnUv89t8awxCrKcldMnB30p8aJBKx3WPSAB0XPqwgZraDS1cFNKPybTvmPYux1Xf3fJJu5g2bemhLAM/p.jpeg" alt="" />
                        <img src="https://uc46ec175e395f8ad2fe7033fce5.previews.dropboxusercontent.com/p/thumb/AB124oBxsMmIhPKLazxDkOcQ3RJBC6bPf6sYM0hz31ee6RlB_GOAf6QNuMSXPATev-AOfyCzecyCyD4Y_Gl589PfMIWQA0_tQ_HGx_UFW7J9kPh3aMc4iBJmWGY2f3y6PTZKSt1iizgR8BdOV7T07sDoEoFxrJFPbKWqpN9o55--fi4ZHkNEdUM24f2nRIilUG06voh2kvY-iqpXcPs7TrvHfH5dJxWTbFlD-H70HeP69QN3HCBu2CqVNZXyyCyKRpHiznIjtm2l3YAs9ZUTr9AAm8WJ_1-BlDQQRXaxsUvEtUNARfGplBjuYUWzXORh90req8RuYYLls8PiLlqpDDgLqwQDrQJ9wi6_ByNXWjHnsd0iG-xXgtAF_7PSJMQ_4C0/p.jpeg" alt="" />
                        <img src="https://uc6289587518813bbaae9c43ef35.previews.dropboxusercontent.com/p/thumb/AB1dYgEl2eJ1aLMKuuvCR9oiubIGmtZPmzcVuQAd5g8ETa6NKrscaeQVFpVPLIK6aWcMHOt5_SLa8WaJ7GqpYHiMWZeUvBG_IhtvtXxRk6ADrKGRIleXNBwJHjJDD9Rossx4R1tWyvZXzIX1p2dq51Bqe8fv1NvXdjWtiqHPJE31HlRimCoeQd0XkdjVVTCcpvXm-nGA4KguFMeerJPukk3xkw6OsHynOhiFtlLcfvXSf2Lozpjp2WoHoYZtn-OMsWLLAoKnZ712pPEBrtpsJX3WZogm-DKmCOu-KzIR9Vz-XROy_MvoqSo7vVfxi4NtBuQK7d-NzD8fNvT3zs6eeBQ3uMJ7RDClX9yBFWmUE4XFOH3eq6wLMZ8esKK32SdzRqI/p.jpeg" alt="" />
                        <img src="https://uc025ee168e8682674e4d37bdf9a.previews.dropboxusercontent.com/p/thumb/AB0guFDtuM1mDXvXUf4y9xOUbBIQxuJkn23xPq_-s9lOEVTggEiPUE4pPC09nbl5t33osbGCcGKR_vjYdu2y1-5VLbZP-aIdXxamsVntK_JnID7PvWrq1y7I0F37_weH7niAM8m-OFCAPexcz7O9p8GNsnZsOXB2cOO-oeVhq9ar6FFVnl2koJ8aHc-h6_rig5MGO7cYl1GbObrWKhv9izqxfsdXfxbKGxO7DYhiEtV-UDq_GhCR2fYvZrywr8sQ-_BAn0M1sTTjuAHm6vk1VYLWCjyixb1WcBe7NTuS3hJVUkS5_JLSex6UMupXuhX7iRpV6Lf3mdKg8ko30XQ0kuxNerM_e6Gk1bZre99g3HfO5csbEmJqCqe74_bvxLW-PkJJF6XbBwgWC-JQVKjWPQTc84fcMB78r2flFTbF3-ETjsg3PSmC1KTazT_K3tU4iI4/p.jpeg" alt="" />
                        <img src="https://uccfcb6233a9415faef4c6a56fba.previews.dropboxusercontent.com/p/thumb/AB00-pBjN5peqAJeVkCXaEBbr17ZZJHYltzP1Ntt6hJ5N3x8bfBr2UtmEbv8GcrzkYyd4lwMH_PBoPzlyshlm19UJM3pVQjUsC7d5wQWlPDx98Enmsj6D-LO3rPGw7rrt9T9OF4SLplDZYlIZ1GxPKWc4omMayc54dxgozC7zLQsI0cUrhzVFjRw1DMGru15W1u6kcQFWk-lE3pN0RcWPO2hBOP5hWQG0pVTwk-5ybGmtTecJY9RO_FxaPjgD58G7eoZj3RDfhPXefkFT2h9bXD9fZj8dEl4L2Fvi8Phnsp8wPzM3U8yLxcAzkF3L4s7XOgjycYL8lqazyP_x27mF4bUNsSEgV6EJ3SLa8-nBCXX7Bt3wzKW3L2NheKVh2PZuLSx3mmxv9qWRzAh5y9W-R_jkDn_DdCaqG2gxyabgjZMnLyAh_a64OAMmtJ_cmRlU9I/p.jpeg" alt="" />
                        <img src="https://ucde28fa14de4cfd0cf97b3b6b55.previews.dropboxusercontent.com/p/thumb/AB2sdbPgwB5jjl0-pZUAVtVDVWwJH-JUs1nZ-d2goXIrEgCvKk1lqHcsviuOpZleIXB0G4v_HIgF0oX6s2zbrys-3M-kaDSMWErGjs4aXsItK2kaqU_mt78TC6-XCn3DuSGBl7tiQflGFLR_S5GWJoXLDPcJoeLDLuBewYrvqRD5cX7zYhvQGmH5dj7s6VmKwykm6Kl_8Dij9nCgtXRm_c3vAg0yznBvoOwxsmRiBG-5ETGdRSWuYeAyDssZGKnhvuizELP2Webo68w7H0tn4iTvoe6NglFDWaELvw_EKORvZC0ZkxvbBRd18FCmbNO2FEeCn76Vsg0kJ5ZqjrscWOreepBs3l3UHs4Usllwifcm_wtd7LWeECfF4a8rXFZF69g/p.jpeg" alt="" />                    
                         <img src="https://uce462138dfe8d17409e3391a2e3.previews.dropboxusercontent.com/p/thumb/AB0HkPJtGEDPe1VRFdfUVOi0ludzKJcZhI0bF0uNeRGlrsRT54qtmbF3YrijcgVV-eBr7I8r75iCMy-JqUzZF8GPYfCoQ4afiH29eJDrN_9h8bkapSg-FthdScuW2OUwhBEIuYTtKslMCLUCBSwfS1ET1j7qLargxqCULmIOL60-PdZNqGspTJFiXeKYEfvRCrRPb8RA_BAf95hinxs-nSietXpONXe8swf5-A9RFw0Z5dW1zlMc2qv6EqANXKDXOEbF3q7TCYVDelRjtIRwM_cabUpjXaUkacemZvhKJMpm2vomxBl5KeOQmQ56dKtVtdFxo8woZjWXX4An7zPvwAe7mV5dOMzNA08KSEuQFe9zWhjIDNAKeoRqQ3FOAZ_vXYA/p.jpeg" alt="" />
                    </div>

                    <div className="contactusstrip">
                         <div>
                            <h6>Interested in us!</h6>
                            <div> 
                            <div className='d-flex align-items-center socialiocn'>
                                <div className='mx-2'><a href="https://www.facebook.com/shineditzz">
                                    {facebookicon}
                                </a></div>
                                <div className='mx-2'><a href="https://www.youtube.com/channel/UCR0rBe3RisbD_tXq-FMeTFA">
                                    {youtubeicon}</a></div>
                                <div className='mx-2'><a href="https://www.instagram.com/shineditzz/">
                                    {instaIcon}</a></div>
                                <div className='mx-2'><a href="https://www.linkedin.com/in/aszen-technologies/">
                                    {linkedin}</a></div>
                                </div>
                            </div>
                         </div>


                         <div >
                            <img  className="gifcontact" src={gif} alt="contact" />
                         </div>
                    </div>
            </div>
        <Footer/>
    </div>
   )
}

export default Samples