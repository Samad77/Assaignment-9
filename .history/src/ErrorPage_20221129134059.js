import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className='mx-auto'>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISFBISFBEVGBISGRIYEhoSHRkZGBgSHBkZGRgUGBgcIS4lHCErHxkYJjgmKy8xNTU1HCQ7QDs0Py42NTEBDAwMEA8QHhISHzErJSgxNjY4MTE1NjE3MTQ0ND89NDQ0NDE0NDc0NDQxMTE0NDQ0NDQ2NDQ0NDQ0NDQxNDQ0P//AABEIANAA8gMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEDBAUGAgj/xABJEAACAQIDAwYJCAgEBwEAAAABAgADEQQSIQUTMQYiQVFSkRUWMlVhcYGSsQcUU3KTocHSNEJidLKz0eEjgsPwJDNjc6LC8UP/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKxEBAAIBAwMCBQQDAAAAAAAAAAECEQMSEwQhUTFBFBUyYXEFIlKhI4HB/9oADAMBAAIRAxEAPwCTIiIXIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICJdVcoN4BBGXh1QLUSrLYykBEStuuBSAPQYzf7EKtzaBW3oMW9MqaZEpfrgUiV+H3iUIgIiICIiAiIgIiICIiAnmW3xNNTZqiA9TMAe4mePntL6VPeX+sZWilp9l+epjfPaX0qe8v8AWPntL6VPeX+sZTx28SyYlBKwoREQERPMC/UUkDptLaKbiEe09b06wKVbX09s8xAECo/+f1laaX4zyZcoqeMC4yAwiAQ72lk1DAyJjmmeqVWqemXlN9YGOylf9/dHwP3GXqp0lleqBSJVuvrlICIiAiIgIiICInmEuD27+kVfrD+ETFwwBdAQCC6XB6RmFxMrbv6RV+sPgJiUL5ksCTmWwHEm4sBMJ9X0unH+GPx/xu+V+Ep0qyLTRVBW5CgAE3Os0E3nKyq7VlZqTJzQAGKm9ibkFSR0zRybeqOkzwxnv2dDh+UGERERsfQVlVQytUAKsBYqR0ES54y4PzlhvtRIV2n/AM+t9d/4jMW87a6MYh8zqa0xe3b3lOnjLg/OWG+1EeMuD85Yb7USC4k8MeWfNPhOnjLg/OWG+1EeMuD85Yb7USC4jhjyc0+E6eMuD85Yb7UR4y4PzlhvtRILiOGPJzT4Tp4y4PzlhvtRHjLg/OWG+1EguI4Y8nNPhOg5TYPzlhvtRK+M2D854f7USCrxeOGPJzT4ToeU2D85Yb7UR4y4PzlhvtRILiOGPJzT4T5gtsUazFaOLpVHUZmWm4c5AQC1uq5HfN/gauYX6739YkLfJd+mVf3ar/MoyZdlDm39JmVq7Zw0rbdXLLqoTwlmZUx6nld0oQ8n8Yg/jEJIiICIiAiIgJ5nqIGmx2wKdV2qF2Uta4W1r2tfUTGqcmVUFqdRs66pe1sw1HAToJYxGOo02CPVRGIuA7qpI6wCZXbEumvVatYiM9oc3h8FVxStWr1G5vNTgOB52luv77zmuWdU4FaDIA+9NQNvOjLktbL9YySqrq1MspBUi4K2II6wRxkY/Kr5GD+tiPhTl6UibREmp1mriZpOI8QjytULszt5TksbdZNzPERO15kzMzmSIiEEREBERAREQEREBERA7L5Lf0yr+7Vf5lGTRsvyP8zfhIX+S39Mq/u1X+ZRk0bMIFP2t+E5tX6nRp/SuO5uZRevqhzcx8B95mS6h6BEGICIiAiIgIiICIlrE1lpo9Rr5UBY242EEK1qq01LuwVV4ltAJCPL6sKmIaoQw3vOUMONNeamp6NOA0uWMkXAZ9oVS9UgUaZ5tMHieIuOn0n2TB+UjYVKuMPVLlKiZksoBz0/Kt6Mp6f2opaInM+jW+nONsd5n+nLfJ9i8XTqLTLv81cZRTe7Lc3IdAfI67i179MzvlV8jB/WxHwpzb7L2NUKYZ6aBKVJUUtmuzZWOZiNDc8JqPlV8jB/WxHwpy+nbdbKmtSKU2xP5RzETrfk/wBk06lWpjK4/wCFwIV3vwer/wDnSHQTcA2+qOmdNpxGXHEZlybqV0IIPp0nqpTZbBlZSRcZgRcdYv0SYcbgKVTbtatUQNTwmETEZTaxdRzdOGlyfWBNFW2o+2NlY6riFTf4J0q0WRQCtI2JT0i2cdx6JTkW2I6VCeAJtxtrp1wiFiFUEsxAUKCSSeAAHEyYOQWyaeEw1RaoHzzGYerXyka08MoCordRJYn13H6sjLkd+nbO/eML/GstF85+yJrjDGbZeJUEnC1wACSTTcAAcSTl0EomzMQy51w1cpxDLTcrbrDBbWklctcZt9auNCCp8wG8AISgV3GUBucRmt5XpmdjsftKmuxEwQqNTejT3wVM6Ef4Y57lTkGUtrcSvJP2TthEWGwlSoSKdJ3I4imjOR68oNp5xGGqUzldHRup1ZDbrswBkzs26rcoGwWlVadFl3S5iMTkctlUA3N7aW43muxOErbQwezae0FK4yriglMuoSq2G1aoSoAI5inoGoU8Y5DYjDD7NxFRDUTD1npi92po7L6ecotLFCg9RsiI7trzUUs2nHmqLzv+U/LnF4XGNh8Iy0sNg2FNKSomVgoAbNcXsTcaWt651mz8FTG1aGMoqFXHYGtUKqOFUNSzMPWGT2gnpidSYjvBFYlC+JwdWlbeUqiX4bxGS/qzAXliSecXjMRsjaLbTD8w0/mjV0FN99cWCjKpIzZdbdLDo0jCWrbKtow7L5Lf0yr+7Vf5lGTFgBzPaZDvyW/plX92q/zKMmLAHmcOkzHV+p0af0sn4feZQmCYmSxERAREQEREBERAShErEDmtq8nVGarQLI665VOh68pvzenThOZrMXN2ZmPWxJMkLHm1OoepG/hMjuY3iI9Htfp37qzu7r2ExT0jdGIHSL6EdIImt+VFw1PBMODGuR7RTMynNhNZy9cvh9nW1N8QNNTcZB+E00J/dhj+qUrFYxHdws7zYnKnZyYOhgK+BrOFqK9Qo+VWrFtHOVgxA00PVOZwGyAytUrlqdNbWvoSfbNWxAYleAJy9dr6H4TtzW/bw8SazWImfdOuOxuFbalTCCmUxGJwjU3qMxyuGUGmgW+hAD9Gs5XYODbZGzsY+OoH/Hq0aS0iVvVRSM1tbWIzn1CRziMbVqOKj1XeoMtnZmLjLqtmvcW6OqXdobTxGJKmvXqVCgsmdi2UegcBKxp47I3pe5M8pcBj8ViayYOqtf5u+9epULBqK2G7VAxVePQB0yM9hVKT7TwrUKZp0GxWHNJGJYomdLAsSSe+ajC4upSLNTqOhZSrGmxUlDxU24j0S3RqMjK6MVdCGRlNirDUMCOBEmKYzhE2yknlps7bdTEY3djEHBsWygOuQ0sgzc0tw8qbDanKavgfAISploVaVPfqQpDJempJuLiwYnQiRu/KLHEEHG4kgggg1HsQdCDrMHE4upUCLUqO601y0w7Fgiac1QeA0GkRSe0ThO5LvzZtntyiaichWnTrUSv6pZXa4v8AtZpgDbJrYTZW16xzVsFid1iHAAJosSjEgaXsVPf1yOau2cU+cPiazCooSpmdjnpi9ka51AudD1mWExlVUaktRxSc5nQMQjNpzivAnQa+iRx+Te7nldyHxtXG1KmGpbyhi2FSk6lcqhgCc5J0AJJ6bi3qnYYDGU12rQwdJswwGBrIzDhvC1K6+wKvtNuiQ/hNt4uihpUsVWSmb8xHZVF+OUA83p4W4zFwmKqUWz0qjo5BUtTYqcp4i46DYRNJmMSboh31LaVbamyMeMQ+8xGBenWpMQobd6ZgcoAPNFQX9InIcndnLia2R77tVZnymxtwAv0an7pg4bGVaYcU6joKgy1AjFQ69lgOI1OnpnZcg9nPu6lYIx3jBVIBIype9v8AMT3TLqLTp6czX/To6TTrq6sVt6e718n2F3W0cVT+joVgPVnolT3ESWMB5PtM4fY+z2TaL1SjAVMJUBuCLuj0R0+gjuncYDyfaZlW++sW+zS+nstNY9p/pkxESWZERAREQEREBERAREQMPazWoVj+w/wtI+nebeNsPXPUhJ9QsTI7XGKegxw3v3rGXq9B1GlpVmLziZlkhc1h1kDv6Zr+VjVcElI81jUNQLqSEy5bkD05h3TLp4lSyjXUr8RLXyreRhPrYj/TlqdPato3xhT9Q6qlqxOlOUf4nFVKhzO5Y9F+A9Q4CWYidcREejw5mZnMkRElBERAREQEREBERAey56AOk9U+m+SezPmmCwtAjnU6abz01CMzn3iZ89cl6KvjMMHUsiuruB2E59u8Ae2Tv43J9C3eJx9RrVrMVtLq0On1NSN1IzDbbXoKyF7c5QQp6QGIzfAd01+A8n2mY1XlXTZSpotYgg6rwMyNntdAeskzKupW30y2to6mnH74wyoiJdkREQEREBERAREQEREDWcpD/wALif8Att+Ei6nJS5Qi+FxI/Yf7tZFlPjPU6D6Z/LDW9YZFLyl9a/ES/wDKt5GE+tiP9OWcMt3pjrZB3sJ3mP2TTxAVa2FSoELFN4rHLmte1iOoR11tton8p067qzCA4k3+KmC83Ufcf80r4q4LzdR9x/zTj5oTwyg+JOHirgvN1H3H/NHirgvN1H3H/NHNBwyg+JOHirgvN1H3H/NKeKmC83Ufcf8ANHNCOGUIRJv8VMF5uo+4/wCaPFTBebqPuP8AmjmhPDKEIk3+KmC83Ufcf80r4q4LzfR9x/zRzQjhnyg+JOHirgvN1H3H/NHirgvN9H3H/NHNU4ZR5yFwt2q1T+rZF9Z5zf8ArOxnbbJ5NYSnSVVw1NM12IUEC59BPVaZvgHDfQrPM19C2rebZet03W00NOKYlHk6rk/UzUQOlGYH7iPjNz4Cw30Kw+Ap0lJpoFuRmt09UaGhbTnMydT1lNau2InK1EROt55ERAREQEREBERAREQMTaqZqFZetKg/8TInw6FjYdAZj6lUsfuBkwumYFesEd+kjjktgs+IqIR5FOup9ZGT8TPQ6O+2tp8MtWuZhj7Dp5sRhx/1KZ9inN+ElgVAZG3I3DlsSCR/y1dj6/JHxMkKV662bx9oNKOy/vB1xnHXLE8zha4ZOcdcZx1zGntVJ0AufRAvZx1yjVlAJJ0EDDP2fhLGKwVRlsq8SL6jhB2e/ntPtjuP9I+e0+2O4/0mB4Krdj7xHgqt2PvEJxXy2SV0YXDXHtnreDrmLg8FVW4ZfSNRMn5q/Z+EI7K5x1ylSuigszAKOJPACWXQjiLeuaflHWy0wg4uwv8AVGvxtKaltlZs00dPkvFfLf8AhzC/TJ3ynh3DfTLI7icXxlvEPU+V0/lKRPDuG+mWeam2sKykb5NR1yPYj4y3iD5XT+Uu9ErMPZNfeUkPSBlPrGn9JmTurbdET5eVes0tNZ9iIiWUIiICIiAiIgIiIFt6yrck8NT7JymA2vg6b1KiaPUDljlOpJz6+2dY1NT0THGz6fRTT3V4d01071rE5jKt6zbGJw0Gx6uHpNUdKyg1SDrl0Fyctjra5m7p7RpuQq1EZjfRTfTrns7Op6/4aa8eaJ6TCKvkqov2Rb4Re1J9IlNYtEYmYlXemN43XPW6PonndGZL9jeN1zIw+OKi2UE9Jv8A2mPuz1Ru26oMQzvCh7A7/wC0eFD2B3/2mDuz1RkPVCNsM7woewO/+0eFD2B3/wBpg5D1SmQ9UG2Gf4UPYHf/AGjwoewO/wDtMHIeqN23VBthcx206hWy0gb31vwPQZoMfRq1mBZWGUWAHr4/76pu923VG7bqmV9Lf2mezo0daNLvERny5rwY/ZbujwY/ZbunTbpo3R9Ex+Er5dPzC/2cz4Mfst3R4Mfst3TptyfRK7n0x8JXyfML+IafZ+8ohgELAm+vQbWPwE22GxBZbuuVtdJ7FH0z0KQm9Kbe2ezk1dWNSczEZ8vYN+ErKAWlZowIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICeZ6iAnmeogIiICIiAiIgIiICIiAiIgbXcp2F7hG5TsL3CXYhRa3Kdhe4RuU7C9wl2IFrcp2F7hG5TsL3CXYgWtynYXuEblOwvcJdlDAxHekHVCFzOGK6DguW+v+YT1VNJcuYKMxCre2rG9h9xmkPJu4cFksd8aYCeQ7inZrk3LAqTcm/OsLAQnJxsysz02CMCgZL6byo5vdtTaoRcdUDd0TSdQyhSrcCLaxVNJAWbKFGpJtoL2+M0VLkyFamcycxSq5Q6gasQ4VXCljm1uDe09tybFsqmmF3KUyMlwzKVIYgnQXDGwtfNre0DfbtOyv3S1Qak+bKo5jMp0/WXjbvmlqcnWZi2an5Wa2Q2e7o+SprzkGWyjoFuqZWz9kNReo4cHe2zLY2TUaU9eaLX04XCnoNw2u7Tsr93HqgU07K/dOfbk2xVFz0xkVkuEObUod8Dm0q83yvTLuF5OrTelUVlDUyhJVbFiBWD63/W3i3+oPYG2xT0aSNUqZERBdmawAHWTMepjsMpKsyAhcxuNLZc3lWtfLc2421tLmIwl6dREsDUzm75mAZuJsTf1AWE1jcnyzBndWBUBgFYE2pmnkBzc1dc1/Kv0wM3wjhuaehiFB3b2D5suVjlspvpY2MU9pYZgCpzZjYBUZmJsGByhb5cpBzWtYjWW8PsfItNN4xC7x3JuWeu2gqFmJNlBaym/6vZmFQ5OMiZQ6A3SzKrhksiIWQ575jkHHTQacbhsn2hhlDE6BWKXyNYuL3VObz7ZWvlvaxvK/PaHOygtlCkmmjutmAIsyqQdGBsOgzCOxHFTfJUVGVmZFCsUJbOGZlLeUc/EW4SuG2G9LSnVCZaW7UqpuzZERalQZrMVCaWA4wNnhXpVVDoAVNwCVI1BKkWYAjUES/uU7C9wlMPRWmqoosqAKvqAtL0C1uU7C9wjcp2F7hLsQLW5TsL3CNynYXuEuxAtblOwvcI3Kdhe4S7EC1uU7C9wiXYgf/9k=" alt=""></img>
            {
                error && (<div>
                    <h1>{error.statusText || error.massage}</h1>
                    <h1>{error.status}</h1>
                </div>)
            }
        </div>
    );
};

export default ErrorPage;