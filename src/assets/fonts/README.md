# 의성 키오스크 폰트 디렉토리

키오스크 환경에 최적화된 로컬 폰트 시스템입니다.

## 📁 디렉토리 구조

```
src/assets/fonts/                    # 총 7.4MB
└── pretendard/                      # Pretendard 폰트 (6.6MB)
    └── woff2/                      # woff2 최적화 포맷
        ├── Pretendard-Thin.woff2 (100)
        ├── Pretendard-ExtraLight.woff2 (200)
        ├── Pretendard-Light.woff2 (300)
        ├── Pretendard-Regular.woff2 (400)
        ├── Pretendard-Medium.woff2 (500)
        ├── Pretendard-SemiBold.woff2 (600)
        ├── Pretendard-Bold.woff2 (700)
        ├── Pretendard-ExtraBold.woff2 (800)
        └── Pretendard-Black.woff2 (900)

```

## 🎯 폰트 용도별 분류

### Pretendard (Sans-serif)
- **용도**: UI 인터페이스, 버튼, 네비게이션
- **특징**: 현대적, 깔끔, 높은 가독성
- **굵기**: 9단계 (100-900)
- **최적화**: 키오스크 터치 인터페이스


## 📊 최적화 결과

| 항목 | 최적화 전 | 최적화 후 | 절약량 |
|------|-----------|-----------|--------|
| **Pretendard** | 16MB | 6.6MB | **-58%** |
| **총 용량** | 21.8MB | **7.4MB** | **-66%** |
| **파일 수** | 28개 | **12개** | **-57%** |

## 🚀 키오스크 최적화

### ✅ **성능 개선**
- **woff2 전용**: 최고 압축률 (30% 향상)
- **빠른 로딩**: 단일 포맷으로 요청 최소화
- **작은 용량**: 21.8MB → 7.4MB (66% 절약)

### ✅ **브라우저 호환성**
- **Chrome 36+** (2014년부터)
- **Firefox 39+** (2015년부터)
- **Safari 12+** (2018년부터)
- **Edge 14+** (2016년부터)

### ✅ **키오스크 환경**
- **최신 브라우저**: 키오스크는 최신 Chrome/Chromium 사용
- **안정성**: 폴백 불필요 (고정된 환경)
- **성능 우선**: 호환성보다 속도 최적화

## 🔧 유지보수

### 폰트 추가 시
1. `src/assets/fonts/{폰트명}/woff2/` 폴더 생성
2. woff2 파일만 추가 (다른 포맷 불필요)
3. `src/index.css`에서 `@font-face` 정의
4. `tailwind.config.js`에서 fontSize 설정

### 용량 최적화 팁
- ✅ **woff2만 사용**: 최고 압축률
- ✅ **서브셋 활용**: 필요한 글자만 포함
- ✅ **불필요한 굵기 제거**: 사용하지 않는 font-weight 삭제

## 💡 왜 woff2만?

| 포맷 | 용도 | 키오스크 필요성 |
|------|------|-----------------|
| **woff2** | 최신 웹 (2014+) | ✅ **필수** |
| woff | 구형 웹 (2009+) | ❌ 불필요 |
| otf/ttf | 데스크톱 | ❌ 불필요 |
| eot | IE 전용 | ❌ 불필요 |

---

**라이센스**: 
- Pretendard: SIL Open Font License