import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Row, Col, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import './style.css';
import $ from "jquery";

// import chArr from '../Services/Charities';


class FavCard extends React.Component{
  constructor(props) {
    super(props)

    this.state ={
      toggle: false
    }

  }

  handleRemove = (event) =>{
    console.log("removeBTN",event.target.id)
    // $.ajax({
    //   url: '/charities',
    //   dataType: 'json',
    //   type: "delete",
    //   success: function(data) {
    //       console.log(data,"/charities/charities/charities/charities")
    //       this.setState({
    //         test: data
    //       })
    //    return data;
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // });
    
    const target = event.target;
    const id = target.id;
    $.ajax({
      type: "DELETE",
      url: "/charities", /* THIS URL IS CALLING CORRECTLY ie. /items/8 */
      dataType: "json",
      data: id,
      success: function(response) {
          console.log("successfully deleted");
      },
      error: function () {
          console.log("error");
      }
  })
  }
  render() {
      return (
            <Col sm='3'>
              <Card body>
              <CardBody>
                <CardTitle>{this.props.item.name}</CardTitle>
                <CardSubtitle>{this.props.item.name}</CardSubtitle>
              </CardBody>
              <img width="100%" src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVFRUXGBUSFRUVFRUVFRAVFRUWFhUVFRYYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi8lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAAEGBwj/xAA4EAABBAEDAgMGBAYCAgMAAAABAAIDEQQSITEFQVFhcQYTIjKBkQcUobEjQlLB0fAzcuHxFWKS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAgMEAQAF/8QAJxEAAgICAgEEAgMBAQAAAAAAAAECEQMhEjFBEyJRYQRxMoGh8MH/2gAMAwEAAhEDEQA/APMQVNrfFDc7wRIN9lA5Wefjik9lt0DA1yA+C9AixaHguU6PlxQMsnfzSXWPbBxsRqiElFUMdWdlk5scfcWuR9oOtNk2buuXd1CSQ29x9FjnJeWTkqAlKnQQrGEgqEbkxpU71o2buNl/0aIOpWfVejWwkeCqehz6XC11WT1JhZW3CYscXEyGzzl+Q5ttPbZD6e/41LqL9UjiPFbwse3BCloxl51KX4OVd+yXTmEAkBcv1GJ1bK29mcxzaBWpe7Z1nfO6ZGBwFyvWWNaeyvfz1t5VP1PD1gos+D1Y1YbKA5I7IMeQdVhPRdKLSskxQ02poYPTlYuVlx0jqRBC6RnVgRS43GoJ2N+6rhM5SaLjq0LHNs0uPyOlB96SrrqE5LCLXOYfVdD9J4XTV7NlTFndNc124tWkWG3TZ5VvTZBaSnjpDFLsW7QKIgd1YYElO8QqmQDhGjy62RraA5bOm28AsAA7JPFy7asdmDgolKw+QabTRsBeV+0uTcxAFUvSMnKZR3XmHW5NcpIG18otWNxu5AInlO4zL3SUbE8XU1JyfQTqzJHi0tMbS4n3Kj75EsbQbTY407LEt79Yu4MXwY01yNE7fZADVtpIS2gCwMRfyUtNhlFxskI75ws5UakV3u6UC5GyJAh48Ooor1bMCxNTsQ2Rm4JDbAUMdlmlO5KRvcQLpSDYKjLmvIq09JhhCGKCaCY6joUpPwC6dhl+5V3jdPopjp2MGhN2E3G0xngh+WB5UfchvCOVtsDjuGuPbYE2nUaExp1ZQvBVp7LexckztU+qKMdjQfJ5Adh5rs4vZ3Ha+mws0gUdQ1Gh3N902MH5HQxSZ5pPSQymAhezN6dCPhjjY3xpoF/Wt0rn+zePOKkiAP8AWz4H/cc/VdPFaDeBni8ZTDX0vQB+HcOr/mlaPRhP3pT6h7AY+mmSSh3iS0j6jSkL8eSFvBO+jzHqORsuUyQS613vtf7MTYga9xD4nbCRoIAP9Lx/Kf0K4kSAuW1SpinFp0y76JnkAAq0zJgQuecaFhaiySTypounRjHpQox+awSWhyu2T0Jmi3wMj4So5Eti+6QwZNluecDlClsVYDLeaJtc7My909lZ+q2jhKOQylbGxtC7I91rKdsjtCUnNrI7ZQhEqYgJ3WnDdWOOzhPnPih0pV0KNwysVuGgLSR60jOTFWlTIQbRmLaJ2qF37LetTlatRtRMK9Ain8F4B3QDGttCCW1QLlZ1ONkhzaCrS6nlBxdgpclTSewsa0bnySdkfp4JK0zHF7qxwmAKiEU42IkmmMSkgJfFmJNWrnD6bJkO93E3U48k7NaPFx7Bdb7P/hs2N3vMl7JXdoxqEY9Sa1fak3FhfaH44ykR9hPZtszHzzN1NHwRtPBdyXHxrYLvMKPSNI4A2A2pHgh0Na1oDW18rQAAfoiEVurV7VRfjhxjRBjFt6FG4dvupGcHbuOVjY5xsk1qkZAK/wBpRaQN0r746lils2rYyNyty13WmuAbaEd6WqWzKsPI0AVQ9Oy5nO9hcCdzpJMcayd3sc6M+tNIF/RdOAoueGgrdPQEopqqPGvbT8O5IGmXGe6WMfNG4fxWDxbWzx9AfVcE0aV9OCIGnn1A7/VeLfit0UQT+/YKjnc41sAyQUXAV2N6vupc+FJcokmbFxXJHIMmKYDlVMkVhjvsJUZWiMcx3cqs6tk3sE+x9AhU+czdA8m+J0cfkDjM1FWJwdrUMWChaYmlIFLn/GwW7nQh7q7SM0dK+w4tkR+E0rca1YcslSOU07p2FOZfTKNhJFpbyjnsZzUhvUFiR9+sSvTYdsxpRGlGwMJzhdKyiwxe4TVFgS2VDkSCIq+b0xp7IeRCG8IM0nBANCDoUs6OinihSsSFNt7OjEix2yyIm1mG23UrbJwA1thE4e1sNdg4zaPE6klE4prpXTZsuZsMVgX8clHTE3uSfHwHdHgba4o5xtnsv4exRu6dG9gGovkMh7lwcRR9BS6aLZV3sx0uPDiEMY+CrPdz3d3uPiVZSSNo1a9PpUXY01FRYS+4+3ioNy2kA9jxvyoiUVd7f72VG9+nYcWltpLZTjhZZvfR+qSbkFryfFKHIIPJ4A/U7IM+VR59fH6KXLnqPteyhY/BaSZziQAaA+bz8FM5O3mqAZD93AfANy9zg0EeLb7efCJiZRI1hrnAgkUL+qW803r4/e/1rZrxF5Hkbgdq3Hn4oxn2/wB2ComZhIDqcCdqLao+d7pl2S74bGxO/YjzP1VGPK5Na8Wv++TPTZcRTEtHlt9O36LGjuePFLwzUEOWYm738B29K8EzHNS2hNFi1J9Q6bjZTDDPGyUbmnCy0nbU08tPmFp3gj4zQ2yef28k5O0KnFVs8R9vPYN2C/3sWp+M7+arMB/peR28Hffz5WGSivp50rSKsUdiDwfIheKfif7JMxnjIxhUMhp7BxC/kafBjt9ux9QpcuGvfE8/LhraOaYbQcnDLjfZQxJk7k5ultUoM/JTTiLirRqLS0JLqEwvZDaC4pTJjN7oo4zFKCV+QkGeQVaY3UGHlUUGE47hRc2jum8a6YMoLs6fU13BVb1LCvcKtZPXdTOY7xRrmCobKx8LgapYnTPfZYi5y+B/qS+DrJcX3YoJNt3sryeC937eSRkmYzikc8kYdinsEZi0bqulmsrM3L1cJUvUWSTyOzUgxkQ3yoLXKMz1ihsKw8UtOBV03J1tpcuJUeDLLeCjcHVHWWbhpsL0b8I/aDW1+AYTbdUzZWt+Hmy2Q9ie3iuA9nunyZczYY+XbuceI2D5nnyH6mgvdOi9LixomxQDQwbk/wA8ju73nu4/on/hwlFuTH4oty5ItI3dluUgV5mv7oZy2j5qvyNX6hQlla9pHj3B3aRwR5qyVeSxfZt7gFV57tJBHj/lGfK7gm1X5mQ35TY21X22NJORvteCnEtimdl9/v57kb+tBKSP1B9Mc7Vs+mkaWu4a3VQujaBPMNQsWRZrvYNWfIWT9QmsWR5O7nEh3Dew8XeCjgtKUn9rXlr78lrXGNmROaHAAaXM0sbG8/OeQLPl4JyHNe4hwa54dy1h0tYa4s87eC5vrPXKk90NDy02XEghjjs34gPnBr4a/cLOi9Z1vDJNIc8u2PvPidyS1wNNJ4Art6LY/kpS4IledXRfljS0ktew3s5hL3X/APartSwnmrJLhdb1fNA+hPZQgiPDCWu5Fmg4efifFaN/8g2sOaWbFsjhwbB2oi0zJivcVT0r+Pv4/aoo7R0MUwAtwIHpv+qlhv1AO9efIkBVbJtQo7cH7q0xfhaBdUO/+EWOar012u/6JJxpfY37wDgLcEgdYAO3fsUuXg7Df7j9EeI6R2P9vIKtaQiRN0S5H8VJBF057SLdK+Ng2vQA4Psnt8v6rrDkjuFR+1eA3KxpYhu8sJYOLe3dvPmEUrcWkIyKTi0eARGim8nekm5pBogggkEHkEbEFEdZXkSttEON6YT5TYTEjQ4WkvedkaGTsmLTJsipkoZNNquy26iSrMsCDJEE2jI5GimOOb5TLGI74Uq59LHyKFPkH+FbSZlWLPT+wt/B0nVetl5pnHiql7idybRH4ZaLKETsk+TGmuyJcs1LQbaPHikoqAsXLktM9WhwigyYlJsYNBJlYFJjlOWLdYyNE2HaO6/CnrUUGUWTNJE4bE14q4narBIPIJoH6L3T8h2a4HyOxXgHsH7MOy5C9xcyJhGpzfnc7kNZ4HuT2XuBLnANeTpaBQvc1sC49yqMLfGmUYOXH6G34ldvUc/UJd0XgkJ80A0OEeKchup7ib+UEnjxKKTvRUrI5EgaQHH5rA5q6uiRx3+yq+rNaaHB7HkG9iPK/wDCdypQ8URtz6EcFV8zNVNc6rBLaFk1vsL5rdS5EnFqH8inC6KrFg1at6cQ0NJ3BFXdet991aYgDWiiGAW59UC4m93HxPKqYgRIGWXgkta5rXAjUAdLm8gijR43Tj3ljCxw+UAku2B5A1Hk0AB9ErC1NKlW6/zf++Sx+8PndGjl+J1g6G23VZ3v4aOwCjh9Ojh1EbkVZFDY1yPGtyVFuQfeWNw9ovfYcVp7eKHkODjYNgO1Eg8uHmFsPxMcZ85Lf/otfjpStjcsha5o8C4t27Hn+yr5ZKimLRWjU+uPMkD7okchdZcaFmqFkNvt51+6BJJ/BkLL7j4uSO5oXuR2T80WsM/Ovkc41FlvizMaWym/iYymgbhxF7q294T2H/lUkeO92jSA0ULLqFeQvurcjQACLPnuPXzU+Car2x+235bIp1/YSIHck7n7CuymMojw+yG3IH833GyIxzD/AFfYD+6tjd22TyfyTGS0ndp+ndRdKB8rK8yd/wDwtmj2pFBYAXyODWtGpziaAA7kp6dinI8T/EHCEWdIdOkSBswHm6w4j6gn6rl35fgr38RevMzMx8sX/G0NiYf6msu3V4Ekrky5edJL1Gzz5O5Ohv3gtFYUiwppmyyXdipoY1qPvVEFDcii7QlIm+VV2W3e04l8sbLr2OxaYgbWKaxMsss6zqGW0toKrxorVb+aTcOVQ2U7gyfJyY+GgJ7HlaqIyOcdgrPCwXclbCLXQviWDniklkPCdOMUCTFVH7MWirfEoOjCtDjoMmOgaRvI9K/DBrxg3GB/yyaq5var+lLrWPeRv/vqvJfYn2nd0+Q6gXwv/wCRg5B7Pb5/uvWoutwyxNngdqY7uRW4NFpB87VUJxcdHoYcqapEH46IJmHZx0nzBo+jhf2NIUHV2Odo90bPGk7eZNpfOmJNDhY35Hp/I3J7sfzA+Qv9SUvktFBxOnu3u4+fkqsNNjerITbpmOcQ7W0/9RR8NJvhJrkm4rY6Ij1cg9n7gG/EDcOa4d0F2RrjskuZwZK+HbnUeyssmbgBttbQrxA7WUCSGOYaw57XNtulpc2PTZppj4Iryo2k8ciTp3W/0VRm0gGLju0WzcbNsHYeY8fQKbMXbQDp1U0eROwNeqr4ZpIy2GKNwFhjWtcBFXFaaIAATGZgVM2QR5ZLNg4uHuXGtjVEmr7lDLPcbi7T/lphyyv57Guo4z4Q34XuFtstZZrgkAHb6oR1awNLg0fP8OwIotaSPDv+6XxveGQFzSGjYkuLyT23PC6L3520aRfxO41F3c78j0S5RWZP05OteP8AtfsXOTWkwbsgjYAEHcXx6+P2R8Zzq3o3yO23FAqGVIHn4NqrV6kDVXlf7rIgRuq1yUuImUtUMNcTzXoAB/5TDB3QgNQ1D0PqNlNthPjF3snezUpIO3r/AJUJ3skY6KQfC9ro3DsQ4Uf3TGPlRixKDfbYn9vooT5cHZpPrsAnJID6Z84ZkJje+N3LHOjPq0lp/ZL0rT2lA/N5Fce+kP3eSqxebJU2jzXpk4hunXx7ApJisISS2l1mdoC0qMi0RRW3oYifINK5h2TEjqVXkT2nJWyjFBt2D1LEK1tOos4ltiYgJ3V5jdKZaqAUzDlFqRSfZC5s6aDCjb4I5LVzTeolHjynHjda2kLbLmR4SkrlLFw3v3OysIum1ygtszbKsQkrPypXQDGaB2Vfl5DW8LHH5DUSrkw/FehdAcPyULG/0/3N/ra8r6l1Ek0Cut/Dv2pY0fl8hltF+7eHVVm9Lr8zsUzA4puyjA1GWztemU2QE+BH/pWJiJNn/wBKJmhNfCGeBeaJ9L5+iRy/aJ7CQ1kR83NJP6FUtpLZddjn5fceoH1PA/3wSWcb2HCpn9WldKyWR16DYaKa0Dg00bXXdXLuqQkW1j3HwNMbfmdyfoPqle2SaDVo1gAEBjhy8NafIkWP98VOBjZJdLmAs32/pobEfWvuqXI6hIXBwoEURQ2FdgO37p+DqL31oDWl1NOxuzz3470lwjCXt+P9GpjeWA0gs0t3oE0N/LzS78/IA06wGk70K3J3PP6IGbCXu8hsB4Dx9SsbERGWnitX/Wtz9KtBzkm4w0v6CU9DMuRI2RzRpAa5zR8Nmga3vvspS7tL6BogEdrPFfr9lDC6lFK3+IdEg2JNlsgHDrHDq5tNRTMk1RM35df9Tm1sB4VqWwx6bUu+jHOkCxslw3AAPlafdmSFtjTf/UAn7JZkVJjHG6bixyS7FSd7AQ9Re07GvRWH52UjZzf/AMiyqeWH4j6mvumsWTTseP2KdCLSMavZuHIs/EbvufHzUesZ8ePBJNJZDBYA/mcdmj6khbmxibIHO/C5P8RM0sxfcv8Ame5unxph1E+mwH1Rv2xbFZH7W0eZ5Ehc5zzy4lx9XGz+6EpuC0AvNs82zYVx09vwqmB3V9jNposrLrsx2LdQhr4gkXOVzlEFpCoiii0wOICd3ZV0sKtpWoDowjjOinHPiip0lYn3QhYneoij1UOaCs0rYkU2NJOylVkNk8aGzS7To3SRpBKpOk4BsErsMWVrW7kJ8MfyZFWzcrWsC5fqntBpNBF9pOvNotYbK4ose8oZdjeKLfJ9onu2BSD8957qEfTDybRW4p7C0tyj8mtJdCxJKtOnsNGglTA4ctKa6bnhho8LHUtGWXHs1kynI0yyPcBG7Q1ziQ06mnYHjYLtctmogjggH6rznL6iGyMlZy036juPsu0weuHSHRNa9p+IWCSD3HO26qxNVsqwStMsoenvO9UPP+ydbjfAK8wfW1TZHW53Cy4N7UANkLo3XTDqZIC5hJO27mk8kXza1OHKijbLgYtoGdkfl3R1udTXlvcNae/md/sjjrbHE+5aSa+ZwrT6DuVSZjSX2SSb3J7rJpLcTUzu44WuGthtp3B8QUl1YBrC3+Z40/8AVvc/Xj6lc9g5ssYqN5APbYj7HhWmHcjLJLnAnUTz5IrUlSWzOhJuPSPEC0hzTRG4I7JsRbKbYd0Kw0wuWhiDrEZOmVuh39TRbXeZbyD6Wt5udG0Wx2o9qB/WxsqHIcC81xwPonMWPUE1Sl0Z1stcfqMDwNf8N3f+k+h/yg9SzIg06HF57UKH1P8AhU+fIGvDPKz6ngfoq3rXW/yzGkNDnvJAB4aAN3H7hFzcexblxVlr1j8QG48bW+4BkIoDVTQBtZ24Xl3W+syZMplldbjsAPlYP6WjwRM/KdM4vebcf08h5Knl5Uc8zm68EU5839ByolaatpImjUfzJ12YVFmLQspV7VmpBjJyfNBJ3Qvdu7KbIXd0SpGuDNuKC4o74qHKQkfRWxV9HRiw1LEESrEfFhcWGYwg7q+6K5gO7bKXgijJ3XRYOKytgjimti3slJqPyilB+K4iiVZCPsExHh1yuds5fRzk/SImjU7c+fCqZshjflCtuvYkjpKb8qpZemEfMVG48nsJik2YSnOlTgHdEg6QCi//ABZCJOPVGWPSZkddlR9QDCfhTp6eoSdKHiitfBzlZQSg+Klh9RliP8ORzfIHb7J7IwqVZkRUnQmnobCa6Ou9nOtOkeY5nXq+V1AU4dtvFXQx77LgcI2Ard3Xp2N0hw9SLP3RKa6YyGbjpnadLIbKGk/MCB5nlO5GPZK4XAzy9oc51SDe+LPYhdPie0jSP4jSHbWW8Hz9U7HKL0UR3tFxDjpCbqroZh7oggCnj+V99j6ePmgv677z4Ggxt7E8u/wgSYvkse/4m/s6qHr0D22SWHu0gn7ELWJmCbWGE0KvsSK59FzUUNCzxwgtmljf7yMlpHh4eBHdH6jWmjfpHUuwyOylDO2PUXuDQKNk0N9uSqQe1kgadYYK5NH9lxXX+tPyHbmmDho2HqQunkjFCsmRQVM63rnWsdhJEge470z4vueAuJ6v1YzO1HYAU0eA/wAqrllKEASp5Tc1vonlOU1T6GvfobTZQyEbHCU0khail0GkbS3jjdEyBsgxPpLW0DJbLIv2SbnC0UPtBexDGIKkE1hRMgQtNKYei9MJ5GwU0p8EjLGrXQClpokcJVo2M2ispYiuasVFlFnUYPRZHEEtIC6qOPQA0BMMyBo2pa9+KspCyt6Ig0EFbo7kqcmuFV9a6yGNLb37I70GmD6pl/FTTZ4W8bpAd8bzv4Kh9mTrmLnbrtXvoWOEBlgYsJo42QM2SNg7Ksz+qyFxawbeKq5GPdZJJKXJN9GOXwODNt3GyLLFYtVcTzW4Qpuouqgsaa6BUrMyRV91XTNtOYb7NFSzcYDhYm4umGVEJ0mk4fiQMiE+CnGdk2W9hveybdzXZH11sCfulYyi2tSAlJjDcpw7/dNwdalaKDtvA7qvCykSk10Yss0qTGcrPkk+Zx24A2A+ixmfKBQkdXraD7tQKxt32D6km7snNM53zElBIUitFAzrb2xd8agdky4JWZEtjYu9Ay5GhclNS2ZEbjY3iWD5tkprNrId0WSghSUdBpryMQvRSqyPI3pPNescWibJFpkntQSjlyG4LosBGRSUiyEEJSRahkK2UfIdas06PdYjLSHkzeTOskzjp2UxmEtC2sWYkTrsXzsx7R8JXKZ8xkeLKxYmJlEOzp/ZbHr4uytM/KJ+FqxYgqxXgQsNBHdKOke0WBfqQsWLJM5IFJkhrfiG5VVPJqOyxYsQdE4G7poxknlYsQTYKG5IGhtuVVMR2WLF2NBvoGpBYsTwGSpEY1YsQt0AwpUPclYsWN0jF2E/J2pnFFLFiTJsIVkZSQyxssWJmN7GY3tCNqUbCVixVvSK5OkOxRqTo1ixIJXJ2AdjBGi2W1iY9o1ybWwocpOWLEti2AeEMLFiLwMXQQFYsWIDj//Z"} alt="Card image cap" />
              <CardBody>
                <CardText>{this.props.item.name}</CardText>
                <CardText>{this.props.item.description}</CardText>
                <CardText>{this.props.item.amount}</CardText>
                <CardText>{this.props.item.location}</CardText>



                <CardLink href="#">View</CardLink>
                <button href="#" id={this.props.item.id} onClick={this.handleRemove}>Remove</button>
              </CardBody >
              </Card>
              </Col>
            
      );
    }
};




Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}

Row.propTypes = {
  noGutters: PropTypes.bool,
  // see https://reactstrap.github.io/components/form Form Grid with Form Row
  form: PropTypes.bool
}


const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    // example size values:
    // 12 || "12" => col-12 or col-`width`-12
    // auto => col-auto or col-`width`-auto
    // true => col or col-`width`
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  // override the predefined width (the ones above) with your own custom widths.
  // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
  widths: PropTypes.array,
}



export default FavCard;