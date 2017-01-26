'use strict';

angular.module('mgbrowebApp')
    .controller('MangaCtrl', function ($scope, $stateParams, $state, getChapterService, urlDecoder, $localStorage, moment, $window) {
        
        $window.scrollTo(0, 0);

        // store $state into localStorage
        $localStorage.lastManga = $stateParams;

        $stateParams.category = urlDecoder($stateParams.category);

        //###### function declarations ######

        function nextPage() {

            if ($scope.isLastPage) {

                if ($scope.hasNextChapter) {

                    $state.go("manga", {
                        category: $stateParams.category,
                        chapterNo: $scope.nextChapterNo,
                        pageNo: 1
                    });

                } else {

                    $state.go('category', {
                        category: $stateParams.category
                    });
                }

            } else {
                $state.go("manga", {
                    category: $stateParams.category,
                    chapterNo: $scope.chapterNo,
                    pageNo: parseInt($stateParams.pageNo) + 1
                });

            }
        }

        function previousPage() {

            var hasPreviousPage = $scope.selectedPage.pageNo > 1;

            if (hasPreviousPage) {
                $scope.selectedPage = $scope.chapter.pages[$scope.selectedPage.pageNo - 2];
            }
        }


        function onImageLoaded() {
            $scope.isImageLoaded = true;
        }

        function onPageChanged() {
            $state.go("manga", {
                category: $stateParams.category,
                chapterNo: $scope.chapterNo,
                pageNo: $scope.selectedPage.pageNo
            });
        }

        // ##### scope assignment

        $scope.$stateParams = $stateParams;
        $scope.onImageLoaded = onImageLoaded;
        $scope.chapterNo = parseInt($scope.$stateParams.chapterNo);
        $scope.previousChapterNo = $scope.chapterNo - 1;
        $scope.nextChapterNo = $scope.chapterNo + 1;

        $scope.previousPage = previousPage;

        getChapterService($stateParams.category, $stateParams.chapterNo)
            .then(function (chapter) {

                $scope.chapter = chapter;
                $scope.lastChapterNo = chapter.lastChapterNo;
                $scope.selectedPage = $scope.chapter.pages[parseInt($stateParams.pageNo) - 1];
                $scope.nextPage = nextPage;

                $scope.isFirstPage = parseInt($scope.selectedPage.pageNo) === 1;
                $scope.isLastPage = $scope.chapter.totalPages === parseInt($scope.selectedPage.pageNo);

                $scope.nextPageNo = parseInt($scope.selectedPage.pageNo) + 1;
                $scope.previousPageNo = parseInt($scope.selectedPage.pageNo) - 1;

                $scope.hasNextChapter = $scope.nextChapterNo <= $scope.lastChapterNo;

                $scope.keyword = $scope.chapter.chapter.name;
                $scope.onPageChanged = onPageChanged;

                var nextUrl = "";
                var previousUrl = "";

                if (!$scope.isLastPage) {
                    nextUrl = $state.href("manga", { category: $stateParams.category, chapterNo: $stateParams.chapterNo, pageNo: $scope.nextPageNo }, { absolute: true });
                }
                else if ($scope.isLastPage && $scope.hasNextChapter) {
                    nextUrl = $state.href("manga", { category: $stateParams.category, chapterNo: $scope.nextChapterNo, pageNo: 1 }, { absolute: true });
                }
                else if ($scope.isLastPage && !$scope.hasNextChapter) {
                    nextUrl = $state.href("category", { category: $stateParams.category });
                }

                if (!$scope.isFirstPage) {
                    previousUrl = $state.href("manga", { category: $stateParams.category, chapterNo: $stateParams.chapterNo, pageNo: $scope.previousPageNo }, { absolute: true });
                }
                else if ($scope.isFirstPage && $scope.previousChapterNo > 0) {
                    previousUrl = $state.href("manga", { category: $stateParams.category, chapterNo: $scope.previousChapterNo, pageNo: 1 }, { absolute: true });
                }
                else if ($scope.isFirstPage && $scope.previousChapterNo > 0) {
                    previousUrl = $state.href("manga", { category: $stateParams.category }, { absolute: true });
                }

                $scope.nextUrl = nextUrl;
                $scope.previousUrl = previousUrl;

                $scope.options = chapter.pages.map(function () {

                });

                $scope.datePublished = moment.unix(chapter.scrappedUnixTime).format("MMM Do YYYY");

                $scope.hasLoaded = true;
            });

    });
