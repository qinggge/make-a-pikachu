! function () {
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        var id = setInterval(() => {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n >= code.length) {
                window.clearInterval(id)
            }
        }, 30)
    }

    let code = `
    /*
     * 首先，需要准备皮卡丘的皮
     */
    .preview {
        height: 100%;
        border: 1px solid green;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FFDC41;
      }
      
      .wrapper {
        width: 100%;
        height: 165px;
        position: relative;
      }
      
    /*
     * 接下来，画皮卡丘的鼻子
     */
      .nose {
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 12px;
        border-color: black transparent transparent transparent;
        border-radius: 11px;
        position: absolute;
        left: 50%;
        top: 28px;
        margin-left: -12px;
      }
      
    /*
     * 接下来，画皮卡丘的眼睛
     */
      .eye {
        width: 49px;
        height: 49px;
        background: #2E2E2E;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000;
      }
      
      .eye::before {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        position: absolute;
        border-radius: 50%;
        left: 6px;
        top: -1px;
        border: 2px solid #000;
      }
      
    /*
     * 左眼
     */
      .eye.left {
        right: 50%;
        margin-right: 90px;
      }
      
    /*
     * 右眼
     */
      .eye.right {
        left: 50%;
        margin-left: 90px;
      }
    /*
     * 然后画皮卡丘的脸
     */
      .face {
        width: 68px;
        height: 68px;
        background: #FC0D1C;
        border: 2px solid #000;
        border-radius: 50%;
        position: absolute;
        top: 85px;
      }
    /*
     * 把脸放好
     */
      .face.left {
        right: 50%;
        margin-right: 116px;
        ;
      }
      
      .face.right {
        left: 50%;
        margin-left: 116px;
        ;
      }
      
    /*
     * 上嘴唇
     */
      .upperLip {
        height: 22px;
        width: 80px;
        border: 3px solid #000;
        position: absolute;
        top: 50px;
        background: #FFDC41;
      }
      
      .upperLip.left {
        right: 50%;
        border-bottom-left-radius: 40px 25px;
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
      }
      
      .upperLip.right {
        left: 50%;
        border-bottom-right-radius: 40px 25px;
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
      }
      
    /*
     * 下嘴唇
     */
      .lowerLip-wrapper {
        bottom: -22px;
        position: absolute;
        left: 50%;
        margin-left: -150px;
        height: 130px;
        overflow: hidden;
        width: 300px;
      }
      
      .lowerLip {
        height: 3500px;
        width: 300px;
        background: #990513;
        border-radius: 200px/2000px;
        border: 2px solid black;
        position: absolute;
        bottom: 0;
        overflow: hidden;
      }
      
      .lowerLip::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100px;
        height: 105px;
        background: #FC4A62;
        left: 50%;
        margin-left: -50px;
        border-radius: 50px;
      }
    `
    writeCode('', code)
}.call()