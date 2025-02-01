import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      // React 관련 Eslint 설정
      'react/react-in-jsx-scope': 'off', // JSX에서 React를 import하지 않아도 에러 없음
      'react/no-children-prop': 'off', // children Props 허용
      'react/prop-types': 'off', // PropTypes 사용금지
      'react/self-closing-comp': 'warn', // 자식 요소가 없는 태그는 self-closing으로 작성
      'react/jsx-curly-brace-presence': [
        'warn',
        { props: 'never', children: 'never' }
      ], // 불필요한 중괄호 사용금지, 예를 들어 children={'Hello World'} => children='Hello World'

      // TypeScript 관련 Eslint 설정
      'no-extra-boolean-cast': 'off', // Boolean() 사용 허용
      '@typescript-eslint/no-explicit-any': 'warn', // 암묵적 에니 사용 경고
      '@typescript-eslint/no-unused-expressions': 'off'
    },
    settings: {
      react: {
        // 사용자가 설치한 버전을 자동으로 선택
        version: 'detect'
      }
    }
  }
);
