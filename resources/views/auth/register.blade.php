@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Create account') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="user_type" class="col-md-4 col-form-label text-md-right">{{ __('Account Type') }}</label>
                            <div class="col-md-6">
                                <select id="user_type" name="user_type"  onchange="hideFields(this.value)" class="form-control custom-select custom-select-sm">
                                    <option value="student">{{ __('Student') }}</option>
                                <option value="supervisor">{{__('Supervisor')}}</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="f_name" class="col-md-4 col-form-label text-md-right">{{ __('First name') }}</label>

                            <div class="col-md-6">
                                <input id="f_name" type="text" class="form-control @error('f_name') is-invalid @enderror" name="f_name" value="{{ old('f_name') }}" required autocomplete="f_name" autofocus>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="l_name" class="col-md-4 col-form-label text-md-right">{{ __('Last name') }}</label>
                            <div class="col-md-6">
                                <input id="l_name" type="text" class="form-control @error('l_name') is-invalid @enderror" name="l_name" value="{{ old('l_name') }}" required autocomplete="l_name" autofocus>
                            </div>
                        </div>


                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('Email address') }}</label>

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
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('password') }}</label>

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
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('confirm password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="department" class="col-md-4 col-form-label text-md-right">{{ __('department') }}</label>
                            <div class="col-md-6">
                                <select id="department" name="department" class="form-control custom-select custom-select-sm">
                                    <option value="none">لا يوجد</option>

                                </select>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="national-id" class="col-md-4 col-form-label text-md-right">{{ __('National ID') }}</label>

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
                            <label for="year_of_study" class="col-md-4 col-form-label text-md-right">{{ __('Year of study') }}</label>
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
                            <label for="university_id" class="col-md-4 col-form-label text-md-right">{{ __('University ID') }}</label>

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
       hideFields(document.getElementById('user_type').value);
    }

    @if($errors->any())
    $(document).ready(function(){
        let old =  '{{ old('account_type') }}'
       $('#user_type').children().each(function (i,e){
            if(e.value === old){
                $(e).attr('selected', '');
                $('#user_type').change();
                return false;
            }

       });
    });
    @endif


</script>
@endsection
