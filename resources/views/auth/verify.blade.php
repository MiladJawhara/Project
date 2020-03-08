@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('messeges.verify_email_header') }}</div>

                <div class="card-body">
                    @if (session('resent'))
                        <div class="alert alert-success" role="alert">
                            {{__('messeges.verify_email_resent') }}
                        </div>
                    @endif

                    {{ __('messeges.verify_email_body') }}
                    <form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
                        @csrf
                        <button type="submit" class="btn btn-link p-0 m-0 align-baseline">{{ __('messeges.verify_email_link') }}</button>.
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
