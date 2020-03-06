@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div style="text-align: right" class="card-header">{{ __('إنشاء حساب') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="user_type" class="col-md-4 col-form-label text-md-right">{{ __('نوع الحساب') }}</label>
                            <div class="col-md-6">
                                <select id="user_type" name="user_type"  onchange="hideFields(this.value)" class="form-control custom-select custom-select-sm">
                                    <option value="student">طالب</option>
                                    <option value="supervisor">مشرف</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('الاسم الثلاثي') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="user_name" class="col-md-4 col-form-label text-md-right">{{ __('اسم المستخدم(باللغة الإنكليزية)') }}</label>

                            <div class="col-md-6">
                                <input id="user_name" type="text" class="form-control @error('user_name') is-invalid @enderror" name="user_name" value="{{ old('user_name') }}" required autocomplete="user_name" autofocus>

                                @error('user_name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('البريد الإلكتروني') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('كلمة المرور') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('تأكيد كلمة المرور') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="department" class="col-md-4 col-form-label text-md-right">{{ __('القسم') }}</label>
                            <div class="col-md-6">
                                <select id="department" name="department" class="form-control custom-select custom-select-sm">
                                    <option value="none">لا يوجد</option>

                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="national-id" class="col-md-4 col-form-label text-md-right">{{ __('الرقم الوطني') }}</label>

                            <div class="col-md-6">
                                <input id="national_id" value="{{ old('national_id') }}" type="text" class="form-control @error('national_id') is-invalid @enderror" name="national_id" required>
                                @error('national_id')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row std-filde">
                            <label for="year_of_study" class="col-md-4 col-form-label text-md-right">{{ __('سنة الدراسة') }}</label>
                            <div class="col-md-6">
                                <select id="year_of_study" name="year_of_study" class="std-req form-control custom-select custom-select-sm">
                                    <option value="الأولى">الأولى</option>
                                    <option value="الثانية">الثانية</option>
                                    <option value="الثالثة">الثالثة</option>
                                    <option value="الرابعة">الرابعة</option>
                                    <option value="الخامسة">الخامسة</option>
                                    <option value="السادسة">السادسة</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group row std-filde">
                            <label for="university_id" class="col-md-4 col-form-label text-md-right">{{ __('الرقم الجامعي') }}</label>

                            <div class="col-md-6">
                                <input id="university_id" type="text" class="form-control std-req" name="university_id" required>
                            </div>
                        </div>

                        <div class="form-group row mb-0 text-right">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('إنشاء الحساب') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script>

    function hideFields(value){
        let elements  = document.getElementsByClassName('std-filde');
        let stdReqs = document.getElementsByClassName('std-req');
        if(value === 'supervisor'){
           for (const key in elements) {
               if (elements.hasOwnProperty(key)) {
                   const element = elements[key];

                   element.style.display = 'none';

               }
           }
           for (const key in stdReqs) {
                       if (stdReqs.hasOwnProperty(key)) {
                           const stdElement = stdReqs[key];
                           stdElement.removeAttribute('required');
                       }
                   }

        }else{
            for (const key in elements) {
               if (elements.hasOwnProperty(key)) {
                   const element = elements[key];

                   element.style.display = 'flex';
               }
           }

           for (const key in stdReqs) {
                       if (stdReqs.hasOwnProperty(key)) {
                           const stdElement = stdReqs[key];
                           stdElement.setAttribute('required','');
                       }
                   }
        }
    }

    window.onload = () =>{
       hideFields(document.getElementById('account_type').value);
    }

    @if($errors->any())
    $(document).ready(function(){
        let old =  '{{ old('account_type') }}'
       $('#account_type').children().each(function (i,e){
            if(e.value === old){
                $(e).attr('selected', '');
                $('#account_type').change();
                return false;
            }

       });
    });
    @endif


</script>
@endsection
