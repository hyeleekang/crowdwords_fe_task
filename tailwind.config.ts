/** @type {import('tailwindcss').Config} */

/**
 * 매개변수로 전달 받은 end 값 만큼 px 값을 rem 단위로 매핑한 배열을 반환
 * @param end 범위에 포함할 최대 픽셀 값
 * @param baseFontSize 기본 폰트 사이즈, default 16
 * @returns {Record<number, string>}
 */
const pxToRem = (end: number, baseFontSize: number = 16): Record<number, string> => {
    return Object.fromEntries(
        Array.from({ length: end + 1 }).map((_, i) => {
            let remValue = (i / baseFontSize).toFixed(3);
            remValue = parseFloat(remValue).toString();
            return [Number(i), `${remValue}rem`];
        })
    );
};

export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                pretendard: [
                    'Pretendard',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'system-ui',
                    'sans-serif',
                ],
            },
            fontSize: pxToRem(200),
            spacing: pxToRem(1920),
            borderWidth: pxToRem(50),
            borderRadius: pxToRem(100),
        },
    },
    plugins: [],
};
